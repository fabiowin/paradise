const { Op } = require("sequelize");
const Fornecedor = require("../models/supplier.model");

module.exports = {

	findAll(params) {
		return Fornecedor.findAll({
			where: params
		})
	},

	findById(fornid, associations) {
		return Fornecedor.findByPk(fornid, associations);
	},

	create(data) {
		return Fornecedor.create(data, { fields: Fornecedor.fields });
	},

	update(fornecedor, data) {
		return fornecedor.update(data);
	},

	delete(fornid) {
	  return Fornecedor.destroy({
			where: {
				fornid: fornid 
			}
		})
	}
};