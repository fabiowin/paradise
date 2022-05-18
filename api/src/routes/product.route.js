const express = require("express");
const fs = require("fs");
const marked = require("marked");

const { productValidation } = require("../validations/product.validation");
const validator = require("../infra/validations/validator");
const controller = require("../controllers/product.controller");

const router = express.Router({ mergeParams: true });

router.get('/', controller.getAll);

// router.get('/:id', controller.getOne);

router.post('/', productValidation, validator, controller.create);

router.put('/:id', productValidation, validator, controller.update);

module.exports = router;