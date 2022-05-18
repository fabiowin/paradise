const { Model, DataTypes } = require("sequelize");
const sequelize = require("../infra/database/database");
const Venda = require("../models/sell.model");
const Produto = require("../models/product.model");

const { v4: uuidv4 } = require('uuid');

class Item extends Model { }

Item.init(
	{
		itid: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		venid: {
			type: DataTypes.INTEGER,
      allowNull: false,
		},
		prodid: {
			type: DataTypes.INTEGER,
      allowNull: false
		},
	},
	{
		sequelize: sequelize,
		tableName: "Item",
		modelName: "Item",
		timestamps: false
	}
);

Item.belongsTo(Venda, {
	foreignKey: "venid",
	allowNull: false
});

Item.belongsTo(Produto, {
  foreignKey: "prodid",
  allowNull: false
})

module.exports = Item;