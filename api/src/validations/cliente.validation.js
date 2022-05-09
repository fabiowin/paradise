const { body } = require("express-validator");

const clientValidation = [
	body("clienome")
		.notEmpty().withMessage("clienome is required")
		.trim()
    .isLength({ min: 1, max: 300 }).withMessage("clienome must be between 1 and 300 chars"),
	body("clienemail")
    .notEmpty().withMessage("clienemail is required")
    .trim()
    .isLength({ min: 1, max: 256 }).withMessage("clienemail must be between 1 and 256 chars"),
	body("cliensenha")
    .notEmpty().withMessage("cliensenha is required")
    .trim()
    .isLength({ min: 1, max: 300 }).withMessage("cliesenha must be between 1 and 40 chars"),
];

module.exports = { clientValidation };