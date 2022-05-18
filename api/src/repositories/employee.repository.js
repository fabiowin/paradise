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

	// findByName(title, person_id) {
	// 	return Cliente.findOne({
	// 		where: {
	// 			title,
	// 			person_id
	// 		}
	// 	});
	// },

	// findOtherWithSameName(title, person_id, id) {
	// 	return Fliente.findOne({
	// 		where: {
	// 			id: {
	// 				[Op.not]: id,
	// 			},
	// 			title,
	// 			person_id
	// 		}
	// 	});
	// },

	create(data) {
		return Funcionario.create(data, { fields: Funcionario.fields });
	},

	update(funcionario, data) {
		return funcionario.update(data);
	}
};