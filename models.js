const { Sequelize } = require('sequelize');

const db = new Sequelize({
  database: 're_tweets_db',
  dialect: 'postgres',
  define: { underscored: true }
});

const Post = db.define('post', {
  user: Sequelize.STRING,
  content: Sequelize.STRING,
  retweets: Sequelize.INTEGER
});

module.exports = {
  db,
  Post
}
