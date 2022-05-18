const { Op } = require("sequelize");
const Produto = require("../models/product.model");

module.exports = {

	findAll(params) {
		return Produto.findAll({
			where: params
		})
	},

	findById(id, associations) {
		return Produto.findByPk(id, associations);
	},

	create(data) {
		return Produto.create(data, { fields: Produto.fields });
	},

	update(produto, data) {
		return produto.update(data);
	}
};