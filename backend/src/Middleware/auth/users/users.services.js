const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const findUserByUsername = async (username) => {
  return await prisma.user.findUnique({
    where: {
      username,
    },
  });
};

const createUser = async (user) => {
  user.password = bcrypt.hashSync(user.password, 12);
  return await prisma.user.create({
    data: user,
  });
};

const findUserById = async (id) => {
  return await prisma.user.findUnique({
    where: {
      id,
    },
  });
};

module.exports = {
  findUserByUsername,
  findUserById,
  createUser,
};
