const { Op } = require("sequelize");
const Produto = require("../models/product.model");

module.exports = {

	findAll(params) {
		return Produto.findAll({
			where: params
		})
	},

	findById(prodid) {
		return Produto.findByPk(prodid);
	},

	create(data) {
		return Produto.create(data, { fields: Produto.fields });
	},

	update(produto, data) {
		return produto.update(data);
	}
};