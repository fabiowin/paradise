const express = require("express");
const fs = require("fs");
const marked = require("marked");

const { productValidation } = require("../validations/product.validation");
const validator = require("../infra/validations/validator");
const controller = require("../controllers/product.controller");

const router = express.Router({ mergeParams: true });

router.get('/', controller.getAll);

router.get('/:prodid', controller.getOne);

router.post('/', productValidation, validator, controller.create);

router.put('/:prodid', productValidation, validator, controller.update);

router.delete('/:prodid', controller.delete);

module.exports = router;