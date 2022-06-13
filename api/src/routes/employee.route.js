const express = require("express");

const { employeeValidation } = require("../validations/employee.validation");
const validator = require("../infra/validations/validator");
const controller = require("../controllers/employee.controller");

const router = express.Router({ mergeParams: true });

router.get('/', controller.getAll);

router.get('/:funcid', controller.getOne);

router.post('/', employeeValidation, validator, controller.create);

router.put('/:funcid', employeeValidation, validator, controller.update);

router.delete('/:funcid', controller.delete);

module.exports = router;