const express = require("express");
const dotenv = require("dotenv");
const userRoutes = require("./routes/user.route");
const authRoutes = require("./routes/auth.route");
const postRoutes = require("./routes/post.route");
const commentRoutes = require("./routes/comment.route");
const database = require("./config/database.js");
const cookieParser = require("cookie-parser");
const cors = require("cors");
dotenv.config();
const app = express();

// const __dirname = path.resolve();
const port = process.env.PORT || 3000;
const path = require("path");

// connect to the database
database.connect();

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [
      process.env.REACT_APP_API_URL_DEV,
      process.env.REACT_APP_API_URL_PROD,
    ],
    credentials: true,
  })
);

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);
app.use("/api/comment", commentRoutes);

app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running....",
  });
});
app.listen(port, () => {
  console.log(`App is running on port : ${port}`);
});
