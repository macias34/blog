const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { hashToken } = require("../utils/hashToken");

// used when we create a refresh token.
async function addRefreshTokenToWhitelist({ jti, refreshToken, userId }) {
  return await prisma.refreshToken.create({
    data: {
      id: jti,
      hashedToken: hashToken(refreshToken),
      userId,
    },
  });
}

// used to check if the token sent by the client is in the database.
async function findRefreshTokenById(id) {
  return await prisma.refreshToken.findUnique({
    where: {
      id,
    },
  });
}

// soft delete tokens after usage.
async function deleteRefreshToken(id) {
  return await prisma.refreshToken.update({
    where: {
      id,
    },
    data: {
      revoked: true,
    },
  });
}

async function revokeTokens(userId) {
  return await prisma.refreshToken.updateMany({
    where: {
      userId,
    },
    data: {
      revoked: true,
    },
  });
}

module.exports = {
  addRefreshTokenToWhitelist,
  findRefreshTokenById,
  deleteRefreshToken,
  revokeTokens,
};
