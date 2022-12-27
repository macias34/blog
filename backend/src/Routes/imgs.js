const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");
const sizeOf = require("image-size");
const fs = require("fs");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./../../post_imgs/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({
  storage: storage,
});

let { Logger } = require("../Helpers/logger");
Logger = new Logger();
Logger.fileName = __filename.slice(__dirname.length + 1);

const { getRandomInt } = require("../Helpers/tools");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const uploadsPath = path.join(__dirname, "../../../post_imgs/");

router.post("/imgs/", upload.single("image"), async (req, res) => {
  const file_name = req.file.filename;
  const imgPath = req.file.path;

  const dimensions = sizeOf(imgPath);
  const width = dimensions.width;
  const height = dimensions.height;

  let url =
    req.protocol + "://" + req.get("host") + req.originalUrl + file_name;

  const duplicated = await prisma.img.findUnique({
    where: {
      url: url,
    },
  });

  if (duplicated) {
    Logger.log(
      `Tried to upload duplicated img, retrieving img : ${duplicated.file_name}`
    );
    res.json(duplicated);
    return;
  }

  const img = await prisma.img.create({
    data: {
      url,
      file_name,
      width,
      height,
    },
  });

  Logger.log(`Uploaded image named ${file_name}`);
  res.json(img);
});

router.get("/imgs", async (req, res) => {
  const imgs = await prisma.img.findMany();
  if (!imgs) {
    return res.status(404).send({ error: true, message: "Imgs not found!" });
  }
  res.json(imgs);
});

router.get("/imgs/:photoname", async (req, res) => {
  const options = {
    root: uploadsPath,
  };

  const fileName = req.params.photoname;
  res.sendFile(fileName, options, function (err) {
    if (err) {
      throw err;
    }
  });
});

router.put("/imgs/:id", async (req, res) => {
  const { img_id, file_name } = req.body;

  const img = await prisma.img.update({
    where: { img_id: img_id },
    data: {
      file_name: file_name,
    },
  });

  Logger.log(`Edited img titled "${file_name}"`);
  res.json(img);
});

router.delete("/imgs/:id", async (req, res) => {
  const img_id = parseInt(req.params.id);
  const photo = await prisma.img.findUnique({
    where: {
      img_id,
    },
  });

  const fileName = photo.file_name;
  const img = await prisma.img.delete({
    where: {
      img_id,
    },
  });

  fs.unlink(uploadsPath + fileName, (err) => {
    if (err) {
      throw err;
    }

    Logger.log("Delete File successfully.");
  });

  Logger.log(`Removed image with id : ${img_id}`);
  res.json(img);
});

module.exports = router;
