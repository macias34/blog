const express = require("express");
const router = express.Router();

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

let { Logger } = require("../Helpers/logger");
Logger = new Logger();
Logger.fileName = __filename.slice(__dirname.length + 1);

router.get("/categories", async (req, res) => {
  const posts = await prisma.category.findMany({
    include: {
      posts: true,
    },
  });
  if (!posts) {
    return res
      .status(404)
      .send({ error: true, message: "Categories not found!" });
  }
  res.json(posts);
});

router.get("/categories/:id", async (req, res) => {
  const category_id = parseInt(req.params.id);

  const category = await prisma.category.findUnique({
    where: {
      category_id,
    },
    include: {
      posts: true,
    },
  });
  if (!category) {
    return res
      .status(404)
      .send({ error: true, message: "category not found!" });
  }

  res.json(category);
});

router.post("/categories", async (req, res) => {
  const { label, color } = req.body;

  const category = await prisma.category.create({
    data: {
      label,
      color,
    },
  });

  Logger.log(`Created category labeled : "${label}"`);
  res.json(category);
});

router.put("/categories/:id", async (req, res) => {
  const { label, color } = req.body;
  const category_id = parseInt(req.params.id);

  const category = await prisma.category.update({
    where: { category_id },
    data: {
      label,
      color,
    },
  });

  Logger.log(`Edited category labeled "${label}"`);
  res.json(category);
});

router.delete("/categories/:id", async (req, res) => {
  const category_id = parseInt(req.params.id);

  const deleteFromPosts = await prisma.postCategory.deleteMany({
    where: {
      category_id,
    },
  });

  const category = await prisma.category.delete({
    where: {
      category_id,
    },
  });

  Logger.log(`Removed category with id : ${category_id}`);
  res.json(category);
});

router.get("/categoriesPost/:id", async (req, res) => {
  const post_id = parseInt(req.params.id);

  const category = await prisma.postCategory.findMany({
    where: {
      post_id,
    },
  });
  if (!category) {
    return res
      .status(404)
      .send({ error: true, message: "category not found!" });
  }

  res.json(category);
});

module.exports = router;
