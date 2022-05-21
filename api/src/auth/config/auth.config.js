require('dotenv').config();

module.exports = {
  secret: `${process.env.ENCRYPTION_KEY}`
};