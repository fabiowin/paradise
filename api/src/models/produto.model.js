const { Model, DataTypes } = require("sequelize");
const sequelize = require("../infra/database/database");

const { v4: uuidv4 } = require('uuid');

class Produto extends Model { }

// Cliente.fields = [
// 	"uuid",
// 	"person_id",
// 	"keycloak_id",
// 	"enabled"
// ];

Produto.init(
	{
		prodid: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		prodnome: {
			type: DataTypes.STRING(200)
		},
		prodesc: {
			type: DataTypes.STRING(300),
		},
		prodpre: {
			type: DataTypes.FLOAT(5,4),
		},
		prodqtd: {
			type: DataTypes.INTEGER,
		},
		prodfoto: {
			type: DataTypes.STRING(256),
		},
		fornid: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	},
	{
		sequelize: sequelize,
		tableName: "produto",
		modelName: "Produto"
	}
);

Produto.belongsTo(Fornecedor, {
	foreignKey: "fornid",
	allowNull: false
});

module.exports = Produto;