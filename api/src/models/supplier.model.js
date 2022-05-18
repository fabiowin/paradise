const { Model, DataTypes } = require("sequelize");
const sequelize = require("../infra/database/database");

const { v4: uuidv4 } = require('uuid');

class Fornecedor extends Model { }

// Fornecedor.fields = [
// 	"uuid",
// 	"person_id",
// 	"keycloak_id",
// 	"enabled"
// ];

Fornecedor.init(
	{
		fornid: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		fornnome: {
			type: DataTypes.STRING(256)
		},
		fornende: {
			type: DataTypes.STRING(300),
		},
		fornnume: {
			type: DataTypes.STRING(10),
		},
		fornemail: {
			type: DataTypes.STRING(256),
			allowNull: false,
		},
	},
	{
		sequelize: sequelize,
		tableName: "Fornecedor",
		modelName: "Fornecedor",
		timestamps: false
	}
);

module.exports = Fornecedor;