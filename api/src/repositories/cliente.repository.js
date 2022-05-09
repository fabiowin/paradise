const { Op } = require("sequelize");
const Cliente = require("../models/cliente.model");

module.exports = {

	findAll(params) {
		return Cliente.findAll({
			where: params
		})
	},

	findById(id, associations) {
		return Cliente.findByPk(id, associations);
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
		return Cliente.create(data, { fields: Cliente.fields });
	},

	update(cliente, data) {
		return cliente.update(data);
	}
};