const { body } = require("express-validator");

const sellValidation = [
  body("clienid")
    .notEmpty().withMessage("clienid is required")
    .isInt().withMessage("clienid must be integer")
    .trim()
    .escape()
    .toInt(),
  body("vendata")
    .notEmpty().withMessage("vendata is required")
    .toDate(),
  body("venagendamento")
    .notEmpty().withMessage("venagendamento is required")
    .toDate()
];

module.exports = { sellValidation };