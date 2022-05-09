const express = require("express");
const fs = require("fs");
const marked = require("marked");

const { clientValidation } = require("../validations/cliente.validation");
const validator = require("../infra/validations/validator");
const controller = require("../controllers/cliente.controller");

const router = express.Router({ mergeParams: true });

router.get('/', controller.getAll);

// router.get('/:id', controller.getOne);

router.post('/', clientValidation, validator, controller.create);

router.put('/:id', clientValidation, validator, controller.update);

module.exports = router;