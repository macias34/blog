const express = require("express");
const { isAuthenticated } = require("../Middleware/auth/utils/authenticated");
const { findUserById } = require("../Middleware/auth/users/users.services");

const router = express.Router();

router.get("/user", isAuthenticated, async (req, res, next) => {
  try {
    const { userId } = req.body;
    const user = await findUserById(userId);
    delete user.password;
    res.json(user);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
