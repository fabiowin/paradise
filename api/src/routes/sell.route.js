const express = require("express");

const { sellValidation } = require("../validations/sell.validation");
const validator = require("../infra/validations/validator");
const controller = require("../controllers/sell.controller");

const router = express.Router({ mergeParams: true });

router.get('/', controller.getAll);

// router.get('/:id', controller.getOne);

router.post('/', controller.create);

router.put('/:id', controller.update);

module.exports = router;