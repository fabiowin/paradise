const { body } = require("express-validator");

const itemValidation = [
  body("prodid")
    .notEmpty().withMessage("prodid is required")
    .isInt().withMessage("prodid must be integer")
    .trim()
    .escape()
    .toInt(),
  body("venid")
    .notEmpty().withMessage("venid is required")
    .isInt().withMessage("venid must be integer")
    .trim()
    .escape()
    .toInt()
];

module.exports = { itemValidation };