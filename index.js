const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const app = express();

dotenv.config();
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000", "http://localhost:3001"],
  })
);
app.use(express.urlencoded({ extended: true }));

const post = require("./backend/routes/postsRouter.js");
app.use("/api/post", post);
const category = require("./backend/routes/categoryRouter.js");
app.use("/api/category", category);
const comment = require("./backend/routes/commentRouter.js");
app.use("/api/comment", comment);
const users = require("./backend/routes/userRouter.js");
app.use("/api/users", users);

app.use("/Images", express.static("./Images"));

const PORT = process.env.PORT || 2020;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
