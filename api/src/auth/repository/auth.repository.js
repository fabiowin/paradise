const { Op } = require("sequelize");
const Client = require("../../models/client.model");

module.exports = {

	findAll(params) {
		return Client.findAll({
			where: params
		})
	},

	findById(id, associations) {
		return Client.findByPk(id, associations);
	},

	findByEmail(clienemail) {
		return Client.findOne({
			where: {
				clienemail
			}
		});
	},

	findByUsername(username) {
		return Client.findOne({
			where: {
				username
			}
		});
	},

	create(data) {
		return Client.create(data, { fields: Client.fields });
	},

	update(client, data) {
		return client.update(data);
	}
};