const { Model, DataTypes } = require("sequelize");
const sequelize = require("../infra/database/database");
const Cliente = require("../models/client.model");

const { v4: uuidv4 } = require('uuid');

class Venda extends Model { }

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
		tableName: "Venda",
		modelName: "Venda",
		timestamps: false
	}
);

Venda.belongsTo(Cliente, {
	foreignKey: "clienid",
	allowNull: false
});

module.exports = Venda;