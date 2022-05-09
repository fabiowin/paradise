require('dotenv').config();

module.exports = {
  dialect : process.env.DB_DIALECT || "mysql",
  host    : process.env.MYSQL_HOST,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  charset: 'utf8',
  collate: 'utf8_general_ci',
  freezeTableNames: true,
  define  : {
    timestamps: true,
    undescored: true,
  },
  dialectOptions: {
    useUTC: false, 
    dateStrings: true,
    typeCast: true,
  },
  timezone: process.env.TIMEZONE
};
