const { Op } = require("sequelize");
const Cliente = require("../models/client.model");

module.exports = {

	findAll(params) {
		return Cliente.findAll({
			where: params
		})
	},

	findById(id, associations) {
		return Cliente.findByPk(id, associations);
	},

	findByEmail(clienemail) {
		return Cliente.findOne({
			where: {
				clienemail
			}
		});
	},

	// findOtherWithSameName(title, person_id, id) {
	// 	return Cliente.findOne({
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