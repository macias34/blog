const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");

function isAuthenticated(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).send("🚫 Un-Authorized 🚫 no auth header");
  }

  try {
    const token = authorization.split(" ")[1];
    const payload = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    req.payload = payload;
  } catch (err) {
    res.status(401);
    if (err.name === "TokenExpiredError") {
      return res.send(err.name);
    }
    return res.status(401).send("🚫 Un-Authorized 🚫");
  }

  return next();
}

module.exports = {
  // ... other modules
  isAuthenticated,
};
