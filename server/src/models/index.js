const Sequelize = require("sequelize");
const authorModel = require("./authors");
const bookModel = require("./books");
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    operatorsAliases: false,

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
const Author = authorModel(sequelize, Sequelize);
const Book = bookModel(sequelize, Sequelize);

Author.associate({ Book });
Book.associate({ Author });
db.Author=Author
db.Book=Book


module.exports = db;