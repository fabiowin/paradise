const express = require("express");

const { supplierValidation } = require("../validations/supplier.validation");
const validator = require("../infra/validations/validator");
const controller = require("../controllers/supplier.controller");

const router = express.Router({ mergeParams: true });

router.get('/', controller.getAll);

// router.get('/:id', controller.getOne);

router.post('/', supplierValidation, validator, controller.create);

router.put('/:id', supplierValidation, validator, controller.update);

module.exports = router;