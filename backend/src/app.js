const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const postRoutes = require("./Routes/posts");
const categoryRoutes = require("./Routes/categories");
const imgRoutes = require("./Routes/imgs");
const thumbnailRoutes = require("./Routes/thumbnails");
const authRoutes = require("./Routes/auth");
const userRoutes = require("./Routes/users");

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: "50mb",
  })
);

app.use(cookieParser());

app.use("/api", postRoutes);
app.use("/api", categoryRoutes);
app.use("/api", imgRoutes);
app.use("/api", thumbnailRoutes);
app.use("/api", authRoutes);
app.use("/api", userRoutes);

app.listen(3000, function () {
  console.log("Node app is running on port 3000");
});
