const { Model, DataTypes } = require("sequelize");
const sequelize = require("../infra/database/database");

const { v4: uuidv4 } = require('uuid');

class Funcionario extends Model { }

// Cliente.fields = [
// 	"uuid",
// 	"person_id",
// 	"keycloak_id",
// 	"enabled"
// ];

Funcionario.init(
	{
		funcid: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		funcnome: {
			type: DataTypes.STRING(250),
      allowNull: false
		},
		funcendere: {
			type: DataTypes.STRING(300),
		},
		funcnumero: {
			type: DataTypes.STRING(10),
		},
		funcemail: {
			type: DataTypes.STRING(256),
		},
		funcsenha: {
			type: DataTypes.STRING(40),
		},
    funcuser: {
      type: DataTypes.STRING(40),
    },
    funusuario: {
      type: DataTypes.INTEGER,
    }
	},
	{
		sequelize: sequelize,
		tableName: "funcionario",
		modelName: "Funcionario"
	}
);

module.exports = Funcionario;