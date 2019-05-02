const { Sequelize } = require('sequelize');

const db = new Sequelize({
  database: 'real_estate_db',
  dialect: 'postgres',
  define: { underscored: true }
});

module.exports = {
  db
}
