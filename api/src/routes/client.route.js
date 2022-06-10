const express = require("express");
require('dotenv').config();
const jwt = require("jsonwebtoken");

const controller = require("../controllers/client.controller");

const { clientValidation } = require("../validations/client.validation");
const validator = require("../infra/validations/validator");

const router = express.Router({ mergeParams: true });

router.get('/', controller.getAll);

// router.get('/:id', controller.getOne);

router.post('/', clientValidation, validator, controller.create);

router.put('/:id', clientValidation, validator, controller.update);

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