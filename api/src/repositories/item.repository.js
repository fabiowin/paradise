const { Op } = require("sequelize");
const Item = require("../models/item.model");

module.exports = {

	findAll(params) {
		return Item.findAll({
			where: params
		})
	},

	findById(id, associations) {
		return Item.findByPk(id, associations);
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
		return Item.create(data, { fields: Item.fields });
	},

	update(item, data) {
		return item.update(data);
	}
};