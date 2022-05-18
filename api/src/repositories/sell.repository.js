const { Op } = require("sequelize");
const Venda = require("../models/sell.model");

module.exports = {

	findAll(params) {
		return Venda.findAll({
			where: params
		})
	},

	findById(id, associations) {
		return Venda.findByPk(id, associations);
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
		return Venda.create(data, { fields: Venda.fields });
	},

	update(venda, data) {
		return venda.update(data);
	}
};