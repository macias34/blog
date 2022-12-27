const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./../../thumbnails/");
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

const thumbnailsPath = path.join(__dirname, "../../../thumbnails");

router.get("/thumbnails/:photoname", async (req, res) => {
  const options = {
    root: thumbnailsPath,
  };

  const fileName = req.params.photoname;
  res.sendFile(fileName, options, function (err) {
    if (err) {
      throw err;
    }
  });
});

router.post("/thumbnails/", upload.single("thumbnail"), async (req, res) => {
  const file_name = req.file.filename;
  let url =
    req.protocol + "://" + req.get("host") + req.originalUrl + "/" + file_name;

  const duplicated = await prisma.thumbnail.findUnique({
    where: {
      thumbnail_url: url,
    },
  });

  if (duplicated) {
    Logger.log(
      `Tried to upload duplicated thumbnail, retrieving thumbnail : ${duplicated.file_name}`
    );
    res.json(duplicated);
    return;
  }

  const thumbnail = await prisma.thumbnail.create({
    data: {
      thumbnail_url: url,
      file_name,
    },
  });

  Logger.log(`Uploaded thumbnail ${file_name}`);
  res.json(thumbnail);

  // Logger.log("Duplicated thumbnails");
  // res.json(checkDuplicate);
});

module.exports = router;
