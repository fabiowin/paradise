const express = require("express");

const { itemValidation } = require("../validations/item.validation");
const validator = require("../infra/validations/validator");
const controller = require("../controllers/item.controller");

const router = express.Router({ mergeParams: true });

router.get('/', controller.getAll);

// router.get('/:id', controller.getOne);

router.post('/', itemValidation, validator, controller.create);

router.put('/:id', itemValidation, validator, controller.update);

module.exports = router;