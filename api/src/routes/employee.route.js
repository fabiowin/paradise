const express = require("express");
const fs = require("fs");
const marked = require("marked");

const { employeeValidation } = require("../validations/employee.validation");
const validator = require("../infra/validations/validator");
const controller = require("../controllers/employee.controller");

const router = express.Router({ mergeParams: true });

router.get('/', controller.getAll);

// router.get('/:id', controller.getOne);

router.post('/', employeeValidation, validator, controller.create);

router.put('/:id', employeeValidation, validator, controller.update);

module.exports = router;