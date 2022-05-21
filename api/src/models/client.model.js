const { Model, DataTypes } = require("sequelize");
const sequelize = require("../infra/database/database");

const { v4: uuidv4 } = require('uuid');

class Cliente extends Model { }

// Cliente.fields = [
// 	"uuid",
// 	"person_id",
// 	"keycloak_id",
// 	"enabled"
// ];

Cliente.init(
	{
		clienid: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		clienome: {
			type: DataTypes.STRING(300),
      allowNull: false
		},
		clienendere: {
			type: DataTypes.STRING(300),
		},
		clienumero: {
			type: DataTypes.STRING(20),
		},
		clienascis: {
			type: DataTypes.DATE,
		},
		clienemail: {
			type: DataTypes.STRING(256),
			allowNull: false,
		},
		cliensenha: {
			type: DataTypes.STRING(40),
			allowNull: false
		}
	},
	{
		sequelize: sequelize,
		tableName: "Cliente",
		modelName: "Cliente",
		timestamps: false
	}
);

module.exports = Cliente;