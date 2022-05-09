const { Model, DataTypes } = require("sequelize");
const sequelize = require("../infra/database/database");

const { v4: uuidv4 } = require('uuid');

class Item extends Model { }

// Cliente.fields = [
// 	"uuid",
// 	"person_id",
// 	"keycloak_id",
// 	"enabled"
// ];

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
		tableName: "item",
		modelName: "Item"
	}
);

Item.belongsTo(Venda, {
	foreignKey: "venid",
	allowNull: false
});

Item.benlongsTo(Produto, {
  foreignKey: "prodid",
  allowNull: false
})

module.exports = Item;