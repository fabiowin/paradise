const express = require("express");
const fs = require("fs");
const marked = require("marked");

const { clientValidation } = require("../validations/client.validation");
const validator = require("../infra/validations/validator");
const controller = require("../controllers/client.controller");

const { authJwt } = require("../middleware/authJwt");

const router = express.Router({ mergeParams: true });

router.use(function(req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, Content-Type, Accept"
  );
  next();
});

router.get(
    "/verify/user",
    [authJwt.verifyToken],
    controller.userBoard
  );

router.get('/', controller.getAll);

router.get('/mail', controller.getOne);

router.post('/', clientValidation, validator, controller.create);

router.put('/:id', clientValidation, validator, controller.update);

module.exports = router;