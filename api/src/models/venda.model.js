const { Model, DataTypes } = require("sequelize");
const sequelize = require("../infra/database/database");

const { v4: uuidv4 } = require('uuid');

class Venda extends Model { }

// Cliente.fields = [
// 	"uuid",
// 	"person_id",
// 	"keycloak_id",
// 	"enabled"
// ];

Venda.init(
	{
		venid: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		vendata: {
			type: DataTypes.DATE,
      allowNull: false,
		},
		venagendamento: {
			type: DataTypes.DATE,
      allowNull: false
		},
		venretirada: {
			type: DataTypes.STRING(10),
      allowNull: false
		},
		clienid: {
			type: DataTypes.INTEGER,
		},
	},
	{
		sequelize: sequelize,
		tableName: "venda",
		modelName: "Venda"
	}
);

Venda.belongsTo(Cliente, {
	foreignKey: "clienid",
	allowNull: false
});

module.exports = Venda;