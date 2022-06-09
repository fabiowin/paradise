const { Op } = require("sequelize");
const Funcionario = require("../models/employee.model");

module.exports = {

	findAll(params) {
		return Funcionario.findAll({
			where: params
		})
	},

	findById(id, associations) {
		return Funcionario.findByPk(id, associations);
	},

	findByEmail(funcemail) {
		return Funcionario.findOne({
			where: {
				funcemail
			}
		});
	},

	create(data) {
		return Funcionario.create(data, { fields: Funcionario.fields });
	},

	update(funcionario, data) {
		return funcionario.update(data);
	}
};