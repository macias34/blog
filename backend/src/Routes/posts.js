const express = require("express");
const router = express.Router();

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

let { Logger } = require("../Helpers/logger");
Logger = new Logger();
Logger.fileName = __filename.slice(__dirname.length + 1);

router.get("/posts", async (req, res) => {
  const posts = await prisma.post.findMany({
    include: {
      categories: true,
      thumbnail: true,
    },
  });
  if (!posts) {
    Logger.log("Posts not found");
    return res.status(404).send({ error: true, message: "Posts not found!" });
  }
  res.json(posts);
});

router.get("/posts/:id", async (req, res) => {
  const post_id = parseInt(req.params.id);

  const post = await prisma.post.findUnique({
    where: {
      post_id,
    },
    include: {
      categories: true,
      thumbnail: true,
    },
  });
  if (!post) {
    Logger.log(`Not found post with id : ${post_id}`);
    return res.status(404).send({ error: true, message: "Post not found!" });
  }
  res.json(post);
});

router.get("/posts/title/:url", async (req, res) => {
  const post_url = req.params.url;

  const post = await prisma.post.findFirst({
    where: {
      url: post_url,
    },
    include: {
      categories: true,
      thumbnail: true,
    },
  });
  if (!post) {
    return res.status(404).send({ error: true, message: "Post not found!" });
  }

  res.json(post);
});

router.post("/posts", async (req, res) => {
  let { title, description, thumbnail_id, categories } = req.body;

  const url = title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase()
    .replace(/[&\/\\#,+()$~%.'":*?!<>{}]/g, "");

  const post = await prisma.post.create({
    data: {
      title,
      url,
      description,
      thumbnail: {
        connect: {
          thumbnail_id,
        },
      },

      // imgs: {
      //   create: imgs,
      // },
      categories: {
        createMany: {
          data: categories,
        },
      },
    },
  });

  Logger.log(`Created post titled "${title}"`);
  res.json(post);
});

router.put("/posts/:id", async (req, res) => {
  const { categories, title, description, thumbnail_id } = req.body;
  const url = title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase()
    .replace(/[&\/\\#,+()$~%.'":*?!<>{}]/g, "");
  const post_id = parseInt(req.params.id);

  const post = await prisma.post.update({
    where: { post_id: post_id },
    data: {
      title,
      url,
      description,
      thumbnail: {
        connect: {
          thumbnail_id,
        },
      },
      categories: {
        deleteMany: {},
        createMany: {
          data: categories,
        },
      },
    },
  });

  Logger.log(`Edited post titled "${title}"`);
  res.json(post);
});

router.delete("/posts/:id", async (req, res) => {
  const post_id = parseInt(req.params.id);

  const update = await prisma.post.update({
    where: {
      post_id,
    },
    data: {
      categories: {
        deleteMany: {},
      },
    },
  });

  const post = await prisma.post.delete({
    where: {
      post_id,
    },
  });

  Logger.log(`Deleted post with id : ${post_id}`);
  res.json(post);
});

module.exports = router;
