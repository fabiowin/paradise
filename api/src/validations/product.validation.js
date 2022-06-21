const { body } = require("express-validator");

const productValidation = [
  // body("fornid")
  //   .notEmpty().withMessage("fornid is required")
  //   .isInt().withMessage("fornid must be integer")
  //   .trim()
  //   .escape()
  //   .toInt(),
];

module.exports = { productValidation };