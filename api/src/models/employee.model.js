const { Model, DataTypes } = require("sequelize");
const sequelize = require("../infra/database/database");

class Funcionario extends Model { }

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
    funuser: {
      type: DataTypes.STRING(40),
    },
    funusuario: {
      type: DataTypes.INTEGER,
    }
	},
	{
		sequelize: sequelize,
		tableName: "Funcionario",
		modelName: "Funcionario",
		timestamps: false
	}
);

module.exports = Funcionario;