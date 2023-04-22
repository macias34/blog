import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { e as error } from './index2.js';
import { p as prisma } from './prisma.js';

// import { JWT_ACCESS_SECRET } from "$env/static/private";
dotenv.config();

const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET;

const createUser = async (username, password) => {
  // Check if user exists
  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  });

  if (user) {
    return {
      error: "User already exists",
    };
  }

  try {
    const user = await prisma.user.create({
      data: {
        username,
        password: await bcrypt.hash(password, 10),
      },
    });

    return { user };
  } catch (error) {
    return {
      error: "Something went wrong",
    };
  }
};

const loginUser = async (username, password) => {
  // Check if user exists
  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  });

  if (!user) {
    return {
      error: "Invalid credentials",
    };
  }

  // Verify the password
  const passwordIsValid = await bcrypt.compare(password, user.password);

  if (!passwordIsValid) {
    return {
      error: "Invalid credentials",
    };
  }

  const jwtUser = {
    id: user.id,
    username: user.username,
  };

  const token = jwt.sign(jwtUser, JWT_ACCESS_SECRET, {
    expiresIn: "1d",
  });

  return { token };
};

const authController = (locals) => {
  const user = locals.user;
  if (!user) {
    throw error(401, "Unauthorized.");
  }
};

export { authController as a, createUser as c, loginUser as l };
