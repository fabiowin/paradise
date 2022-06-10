const express = require('express');
require('dotenv').config();
const jwt = require("jsonwebtoken");

const authController = require("../controllers/auth.controller");

const router = express.Router({ mergeParams: true });

router.post("/signup", authController.signUp);

router.post("/signin", authController.signIn);

router.post("/generateToken", (req, res) => {
  
  let jwtSecretKey = process.env.JWT_SECRET_KEY;
  let data = {
    time: Date(),
    userId: 12
  }

  const token = jwt.sign(data, jwtSecretKey);

  res.send(token);

});

router.get("/validateToken", (req,res) => {

  let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
  let jwtSecretKey = process.env.JWT_SECRET_KEY;

  try {
    const token = req.header(tokenHeaderKey);

    const verified = jwt.verify(token, jwtSecretKey);

    if (verified) {
      return res.send("Successfully Verified");
    } else {
      return res.status(401).send(error);
    }
  } catch (error) {
    return res.status(401).send(error);
  }

});

module.exports = router;