const jwt = require("jsonwebtoken");
require("dotenv").config();
const axios = require("axios").default;
const bcrypt = require("bcryptjs");

const User = require("../models/user.model");

const newToken = (user) => {
  return jwt.sign({ user: user }, process.env.JWT_SECRET_KEY);
};

const checkPass = (given, real) => {
  return bcrypt.compareSync(given, real);
};

// Registeration
const register = async (req, res) => {
  try {
    let user = await User.findOne({
      email: req.body.email,
    }).exec();

    // If user already exist

    if (user)
      return res.status(400).json({
        status: "error",
        message: "User already exist",
      });

    // otherwise create a user and then hash the password with pre method in schema

    user = await User.create(req.body);

    // Create a token

    const token = newToken(user);
    // req.headers.auth = token;
    // Then we need to return the token and the user information in the frontend

    return res.status(201).json({ user, token });
  } catch (err) {
    return res.status(400).send("Something went wrong");
  }
};

// Logging In
const login = async (req, res) => {
  try {
    // first check if a user with that email already exist
    let user = await User.findOne({
      email: req.body.email,
    }).exec();

    // if not user than throw an error
    if (!user) {
      return res
        .status(400)
        .json({ status: "error", message: "User already exist" });
    }

    // if user than match the user
    const match = user.checkPassword(req.body.password);
    // if not matches than throw the error

    if (!match) {
      return res.status(400).json({
        status: "failed",
        message: "Email or password is Incorrect",
      });
    }

    // if match than create the token
    const token = newToken(user);

    return res.status(201).json({ user, token });
  } catch (err) {
    return res.status(500).json({ err });
  }
};

const loginForDeploy = async (req, res) => {
  try {
    const { password, email } = req.body;
    let data = {};
    await axios
      .get("https://reddit-backends.herokuapp.com/users")
      .then(function (res) {
        let checked = checkUsers(res.data.data, email, password);
        data = checked;
      })
      .catch(function (error) {
        console.log(error);
      });
    return res.status(201).json({ user: data.user, token: data.token });
  } catch (err) {
    return res.status(500).json({ err });
  }
};

const checkUsers = (users, email, pass) => {
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email && checkPass(pass, users[i].password)) {
      const token = newToken(users[i]);
      return { user: users[i], token: token };
    }
  }
  return false;
};

module.exports = { register, login, loginForDeploy };
