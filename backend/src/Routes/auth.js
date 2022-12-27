const dotenv = require("dotenv");
dotenv.config();

let { Logger } = require("../Helpers/logger");
Logger = new Logger();
Logger.fileName = __filename.slice(__dirname.length + 1);

const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const crypto = require("crypto");
const bcrypt = require("bcrypt");

const {
  findUserByUsername,
  createUser,
} = require("../Middleware/auth/users/users.services");

const { generateTokens } = require("../Middleware/auth/utils/jwt");
const {
  addRefreshTokenToWhitelist,
  deleteRefreshToken,
  revokeTokens,
  findRefreshTokenById,
} = require("../Middleware/auth/auth/auth.services");

router.post("/auth/register", async (req, res) => {
  const { username, password } = req.body;

  const existingUser = await findUserByUsername(username);

  if (existingUser) {
    Logger.log(`Użytkownik ${username} już istnieje!`);
    return res.status(400).send(`Użytkownik ${username} już istnieje!`);
  }

  const user = await createUser({ username, password });
  const jti = crypto.randomUUID();
  const { accessToken, refreshToken } = generateTokens(user, jti);
  await addRefreshTokenToWhitelist({ jti, refreshToken, userId: user.id });

  Logger.log(`Utworzono użytkownika ${username}.`);
  return res.json({
    accessToken,
    refreshToken,
  });
});

router.post("/auth/login", async (req, res) => {
  const { username, password } = req.body;

  const existingUser = await findUserByUsername(username);
  if (!existingUser) {
    Logger.log(`Użytkownik ${username} nie istnieje!`);
    return res.status(400).send(`Użytkownik ${username} nie istnieje!`);
  }

  const validPassword = await bcrypt.compare(password, existingUser.password);
  if (!validPassword) {
    Logger.log(`Nieprawidłowe hasło dla użytkownika ${username}.`);
    return res
      .status(403)
      .send(`Nieprawidłowe hasło dla użytkownika ${username}`);
  }
  const jti = crypto.randomUUID();
  const { accessToken, refreshToken } = generateTokens(existingUser, jti);
  await addRefreshTokenToWhitelist({
    jti,
    refreshToken,
    userId: existingUser.id,
  });

  Logger.log(`Użytkownik ${username} zalogował się.`);
  return res.json({
    accessToken,
    refreshToken,
  });
});

router.post("/refreshToken", async (req, res, next) => {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) {
      return res.status(400).send("Missing refresh token");
    }
    const payload = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    const savedRefreshToken = await findRefreshTokenById(payload.jti);

    if (!savedRefreshToken || savedRefreshToken.revoked === true) {
      return res.status(401).send("Unauthorized");
    }

    const hashedToken = hashToken(refreshToken);
    if (hashedToken !== savedRefreshToken.hashedToken) {
      return res.status(401).send("Unauthorized");
    }

    const user = await findUserById(payload.userId);
    if (!user) {
      return res.status(401).send("Unauthorized");
    }

    await deleteRefreshToken(savedRefreshToken.id);
    const jti = crypto.randomUUID();
    const { accessToken, refreshToken: newRefreshToken } = generateTokens(
      user,
      jti
    );
    await addRefreshTokenToWhitelist({
      jti,
      refreshToken: newRefreshToken,
      userId: user.id,
    });

    res.json({
      accessToken,
      refreshToken: newRefreshToken,
    });
  } catch (err) {
    next(err);
  }
});

router.post("/revokeRefreshTokens", async (req, res, next) => {
  try {
    const { userId } = req.body;
    await revokeTokens(userId);
    res.json({ message: `Tokens revoked for user with id #${userId}` });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
