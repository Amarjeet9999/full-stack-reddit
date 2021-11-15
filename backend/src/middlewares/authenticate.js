require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET_KEY, function (err, user) {
      if (err) return reject(err);
      return resolve(user);
    });
  });
};

module.exports = async (req, res, next) => {
  const bearerToken = req?.headers?.authenticate;

  if (!bearerToken) {
    return res.status(400).json({
      status: "Error",
      message: "You have to send the bearer Token",
    });
  }

  if (!bearerToken.startsWith("Bearer ")) {
    return res.status(400).json({
      status: "Error",
      message: "You did not sent correct bearer token",
    });
  }

  const token = bearerToken.split(" ")[1];

  try {
    // First verify the token
    const user = await verifyToken(token);
    req.user = user.user;
    return next();
  } catch (err) {
    return res.status(400).send("Something Went Wrong", err);
  }
};
