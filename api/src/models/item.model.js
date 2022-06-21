const { Model, DataTypes } = require("sequelize");
const sequelize = require("../infra/database/database");
const Venda = require("../models/sell.model");
const Produto = require("../models/product.model");

class Item extends Model { }

Item.fields = [
	"venid",
	"prodid"
]

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
		tableName: "Itens",
		modelName: "Item",
		timestamps: false
	}
);

Item.belongsTo(Venda, {
	sourceKey: "venid",
	foreignKey: "venid",
	allowNull: false
});

Item.belongsTo(Produto, {
	sourceKey: "prodid",
  foreignKey: "prodid",
  allowNull: false
})

module.exports = Item;