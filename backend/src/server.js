const express = require("express");
const connect = require("./configs/db");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Controllers
const {
  register,
  login,
  loginForDeploy,
} = require("./controllers/auth.controller");
app.use("/login", login);
app.use("/register", register);

const postController = require("./controllers/post.controller");
app.use("/posts", postController);

const commentController = require("./controllers/comment.controller");
app.use("/comments", commentController);

const userController = require("./controllers/user.controller");
app.use("/users.json", userController);

const PORT = 8000;

app.listen(PORT, async () => {
  try {
    await connect();
    console.log(`listening at ${PORT}`);
  } catch (err) {
    console.log(err);
  }
});
