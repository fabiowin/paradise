const { Op } = require("sequelize");
const Cliente = require("../models/cliente.model");

module.exports = {

	findAll(params) {
		return Fornecedor.findAll({
			where: params
		})
	},

	findById(id, associations) {
		return Fornecedor.findByPk(id, associations);
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
		return Fornecedor.create(data, { fields: Fornecedor.fields });
	},

	update(fornecedor, data) {
		return Fornecedor.update(data);
	}
};