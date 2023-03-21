const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const cors = require('cors');
require('dotenv').config()
const db = require("./src/models");
const app = express();
const PORT = process.env.PORT || 8080;
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(cors());


// маршруты
require("./src/routes/authors.routes")(app);
require("./src/routes/books.routes")(app);


(async () => {
  try {
    //==================Синхронизация//==================
    // await sequelize.authenticate();
    // console.log('Connected to the database.');

    ////==================Сбросить и записать данные//==================
    await db.sequelize.sync({ force: true }).then(() => {
      randomData();
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Произвольные данные
const randomData = async () => {
  const authorsData = [
    { name: 'Alice Johnson', birth_date: '1960-05-12' },
    { name: 'Bob Brown', birth_date: '1975-06-24' },
    { name: 'Charlie Green', birth_date: '1988-07-11' },
    { name: 'David Grey', birth_date: '1993-08-30' },
    { name: 'Eva White', birth_date: '2001-09-22' },
  ];

  const booksData = [
    { title: 'Adventure One', publication_date: '2000-01-01', rating: 4, price: 15.99 },
    { title: 'Mystery Two', publication_date: '2004-04-15', rating: 5, price: 19.99 },
    { title: 'Science Fiction Three', publication_date: '2008-07-20', rating: 3, price: 25.99 },
    { title: 'Fantasy Four', publication_date: '2012-10-03', rating: 5, price: 12.99 },
    { title: 'Thriller Five', publication_date: '2016-12-19', rating: 4, price: 22.99 },
    { title: 'Adventure One', publication_date: '2000-01-01', rating: 4, price: 15.99 },
    { title: 'Mystery Two', publication_date: '2004-04-15', rating: 5, price: 19.99 },
    { title: 'Science Fiction Three', publication_date: '2008-07-20', rating: 3, price: 25.99 },
    { title: 'Fantasy Four', publication_date: '2012-10-03', rating: 5, price: 12.99 },
    { title: 'Thriller Five', publication_date: '2016-12-19', rating: 4, price: 22.99 },
    { title: 'Adventure One', publication_date: '2000-01-01', rating: 4, price: 15.99 },
    { title: 'Mystery Two', publication_date: '2004-04-15', rating: 5, price: 19.99 },
    { title: 'Science Fiction Three', publication_date: '2008-07-20', rating: 3, price: 25.99 },
    { title: 'Fantasy Four', publication_date: '2012-10-03', rating: 5, price: 12.99 },
    { title: 'Thriller Five', publication_date: '2016-12-19', rating: 4, price: 22.99 },
    { title: 'Adventure One', publication_date: '2000-01-01', rating: 4, price: 15.99 },
    { title: 'Mystery Two', publication_date: '2004-04-15', rating: 5, price: 19.99 },
    { title: 'Science Fiction Three', publication_date: '2008-07-20', rating: 3, price: 25.99 },
    { title: 'Fantasy Four', publication_date: '2012-10-03', rating: 5, price: 12.99 },
    { title: 'Thriller Five', publication_date: '2016-12-19', rating: 4, price: 22.99 },
    { title: 'Adventure One', publication_date: '2000-01-01', rating: 4, price: 15.99 },
    { title: 'Mystery Two', publication_date: '2004-04-15', rating: 5, price: 19.99 },
    { title: 'Science Fiction Three', publication_date: '2008-07-20', rating: 3, price: 25.99 },
    { title: 'Fantasy Four', publication_date: '2012-10-03', rating: 5, price: 12.99 },
    { title: 'Thriller Five', publication_date: '2016-12-19', rating: 4, price: 22.99 },
    { title: 'Adventure One', publication_date: '2000-01-01', rating: 4, price: 15.99 },
    { title: 'Mystery Two', publication_date: '2004-04-15', rating: 5, price: 19.99 },
    { title: 'Science Fiction Three', publication_date: '2008-07-20', rating: 3, price: 25.99 },
    { title: 'Fantasy Four', publication_date: '2012-10-03', rating: 5, price: 12.99 },
    { title: 'Thriller Five', publication_date: '2016-12-19', rating: 4, price: 22.99 },
    { title: 'Adventure One', publication_date: '2000-01-01', rating: 4, price: 15.99 },
    { title: 'Mystery Two', publication_date: '2004-04-15', rating: 5, price: 19.99 },
    { title: 'Science Fiction Three', publication_date: '2008-07-20', rating: 3, price: 25.99 },
    { title: 'Fantasy Four', publication_date: '2012-10-03', rating: 5, price: 12.99 },
    { title: 'Thriller Five', publication_date: '2016-12-19', rating: 4, price: 22.99 },
    { title: 'Adventure One', publication_date: '2000-01-01', rating: 4, price: 15.99 },
    { title: 'Mystery Two', publication_date: '2004-04-15', rating: 5, price: 19.99 },
    { title: 'Science Fiction Three', publication_date: '2008-07-20', rating: 3, price: 25.99 },
    { title: 'Fantasy Four', publication_date: '2012-10-03', rating: 5, price: 12.99 },
    { title: 'Thriller Five', publication_date: '2016-12-19', rating: 4, price: 22.99 }, { title: 'Adventure One', publication_date: '2000-01-01', rating: 4, price: 15.99 },
    { title: 'Mystery Two', publication_date: '2004-04-15', rating: 5, price: 19.99 },
    { title: 'Science Fiction Three', publication_date: '2008-07-20', rating: 3, price: 25.99 },
    { title: 'Fantasy Four', publication_date: '2012-10-03', rating: 5, price: 12.99 },
    { title: 'Thriller Five', publication_date: '2016-12-19', rating: 4, price: 22.99 },
    { title: 'Adventure One', publication_date: '2000-01-01', rating: 4, price: 15.99 },
    { title: 'Mystery Two', publication_date: '2004-04-15', rating: 5, price: 19.99 },
    { title: 'Science Fiction Three', publication_date: '2008-07-20', rating: 3, price: 25.99 },
    { title: 'Fantasy Four', publication_date: '2012-10-03', rating: 5, price: 12.99 },
    { title: 'Thriller Five', publication_date: '2016-12-19', rating: 4, price: 22.99 },
    { title: 'Adventure One', publication_date: '2000-01-01', rating: 4, price: 15.99 },
    { title: 'Mystery Two', publication_date: '2004-04-15', rating: 5, price: 19.99 },
    { title: 'Science Fiction Three', publication_date: '2008-07-20', rating: 3, price: 25.99 },
    { title: 'Fantasy Four', publication_date: '2012-10-03', rating: 5, price: 12.99 },
    { title: 'Thriller Five', publication_date: '2016-12-19', rating: 4, price: 22.99 },
    { title: 'Adventure One', publication_date: '2000-01-01', rating: 4, price: 15.99 },
    { title: 'Mystery Two', publication_date: '2004-04-15', rating: 5, price: 19.99 },
    { title: 'Science Fiction Three', publication_date: '2008-07-20', rating: 3, price: 25.99 },
    { title: 'Fantasy Four', publication_date: '2012-10-03', rating: 5, price: 12.99 },
    { title: 'Thriller Five', publication_date: '2016-12-19', rating: 4, price: 22.99 }, { title: 'Adventure One', publication_date: '2000-01-01', rating: 4, price: 15.99 },
    { title: 'Mystery Two', publication_date: '2004-04-15', rating: 5, price: 19.99 },
    { title: 'Science Fiction Three', publication_date: '2008-07-20', rating: 3, price: 25.99 },
    { title: 'Fantasy Four', publication_date: '2012-10-03', rating: 5, price: 12.99 },
    { title: 'Thriller Five', publication_date: '2016-12-19', rating: 4, price: 22.99 },
    { title: 'Adventure One', publication_date: '2000-01-01', rating: 4, price: 15.99 },
    { title: 'Mystery Two', publication_date: '2004-04-15', rating: 5, price: 19.99 },
    { title: 'Science Fiction Three', publication_date: '2008-07-20', rating: 3, price: 25.99 },
    { title: 'Fantasy Four', publication_date: '2012-10-03', rating: 5, price: 12.99 },
    { title: 'Thriller Five', publication_date: '2016-12-19', rating: 4, price: 22.99 },
    { title: 'Adventure One', publication_date: '2000-01-01', rating: 4, price: 15.99 },
    { title: 'Mystery Two', publication_date: '2004-04-15', rating: 5, price: 19.99 },
    { title: 'Science Fiction Three', publication_date: '2008-07-20', rating: 3, price: 25.99 },
    { title: 'Fantasy Four', publication_date: '2012-10-03', rating: 5, price: 12.99 },
    { title: 'Thriller Five', publication_date: '2016-12-19', rating: 4, price: 22.99 },
    { title: 'Adventure One', publication_date: '2000-01-01', rating: 4, price: 15.99 },
    { title: 'Mystery Two', publication_date: '2004-04-15', rating: 5, price: 19.99 },
    { title: 'Science Fiction Three', publication_date: '2008-07-20', rating: 3, price: 25.99 },
    { title: 'Fantasy Four', publication_date: '2012-10-03', rating: 5, price: 12.99 },
    { title: 'Thriller Five', publication_date: '2016-12-19', rating: 4, price: 22.99 }, { title: 'Adventure One', publication_date: '2000-01-01', rating: 4, price: 15.99 },
    { title: 'Mystery Two', publication_date: '2004-04-15', rating: 5, price: 19.99 },
    { title: 'Science Fiction Three', publication_date: '2008-07-20', rating: 3, price: 25.99 },
    { title: 'Fantasy Four', publication_date: '2012-10-03', rating: 5, price: 12.99 },
    { title: 'Thriller Five', publication_date: '2016-12-19', rating: 4, price: 22.99 },
    { title: 'Adventure One', publication_date: '2000-01-01', rating: 4, price: 15.99 },
    { title: 'Mystery Two', publication_date: '2004-04-15', rating: 5, price: 19.99 },
    { title: 'Science Fiction Three', publication_date: '2008-07-20', rating: 3, price: 25.99 },
    { title: 'Fantasy Four', publication_date: '2012-10-03', rating: 5, price: 12.99 },
    { title: 'Thriller Five', publication_date: '2016-12-19', rating: 4, price: 22.99 },
    { title: 'Adventure One', publication_date: '2000-01-01', rating: 4, price: 15.99 },
    { title: 'Mystery Two', publication_date: '2004-04-15', rating: 5, price: 19.99 },
    { title: 'Science Fiction Three', publication_date: '2008-07-20', rating: 3, price: 25.99 },
    { title: 'Fantasy Four', publication_date: '2012-10-03', rating: 5, price: 12.99 },
    { title: 'Thriller Five', publication_date: '2016-12-19', rating: 4, price: 22.99 },
    { title: 'Adventure One', publication_date: '2000-01-01', rating: 4, price: 15.99 },
    { title: 'Mystery Two', publication_date: '2004-04-15', rating: 5, price: 19.99 },
    { title: 'Science Fiction Three', publication_date: '2008-07-20', rating: 3, price: 25.99 },
    { title: 'Fantasy Four', publication_date: '2012-10-03', rating: 5, price: 12.99 },
    { title: 'Thriller Five', publication_date: '2016-12-19', rating: 4, price: 22.99 }, { title: 'Adventure One', publication_date: '2000-01-01', rating: 4, price: 15.99 },
    { title: 'Mystery Two', publication_date: '2004-04-15', rating: 5, price: 19.99 },
    { title: 'Science Fiction Three', publication_date: '2008-07-20', rating: 3, price: 25.99 },
    { title: 'Fantasy Four', publication_date: '2012-10-03', rating: 5, price: 12.99 },
    { title: 'Thriller Five', publication_date: '2016-12-19', rating: 4, price: 22.99 },
    { title: 'Adventure One', publication_date: '2000-01-01', rating: 4, price: 15.99 },
    { title: 'Mystery Two', publication_date: '2004-04-15', rating: 5, price: 19.99 },
    { title: 'Science Fiction Three', publication_date: '2008-07-20', rating: 3, price: 25.99 },
    { title: 'Fantasy Four', publication_date: '2012-10-03', rating: 5, price: 12.99 },
    { title: 'Thriller Five', publication_date: '2016-12-19', rating: 4, price: 22.99 },
    { title: 'Adventure One', publication_date: '2000-01-01', rating: 4, price: 15.99 },
    { title: 'Mystery Two', publication_date: '2004-04-15', rating: 5, price: 19.99 },
    { title: 'Science Fiction Three', publication_date: '2008-07-20', rating: 3, price: 25.99 },
    { title: 'Fantasy Four', publication_date: '2012-10-03', rating: 5, price: 12.99 },
    { title: 'Thriller Five', publication_date: '2016-12-19', rating: 4, price: 22.99 },
    { title: 'Adventure One', publication_date: '2000-01-01', rating: 4, price: 15.99 },
    { title: 'Mystery Two', publication_date: '2004-04-15', rating: 5, price: 19.99 },
    { title: 'Science Fiction Three', publication_date: '2008-07-20', rating: 3, price: 25.99 },
    { title: 'Fantasy Four', publication_date: '2012-10-03', rating: 5, price: 12.99 },
    { title: 'Thriller Five', publication_date: '2016-12-19', rating: 4, price: 22.99 }, { title: 'Adventure One', publication_date: '2000-01-01', rating: 4, price: 15.99 },
    { title: 'Mystery Two', publication_date: '2004-04-15', rating: 5, price: 19.99 },
    { title: 'Science Fiction Three', publication_date: '2008-07-20', rating: 3, price: 25.99 },
    { title: 'Fantasy Four', publication_date: '2012-10-03', rating: 5, price: 12.99 },
    { title: 'Thriller Five', publication_date: '2016-12-19', rating: 4, price: 22.99 },
    { title: 'Adventure One', publication_date: '2000-01-01', rating: 4, price: 15.99 },
    { title: 'Mystery Two', publication_date: '2004-04-15', rating: 5, price: 19.99 },
    { title: 'Science Fiction Three', publication_date: '2008-07-20', rating: 3, price: 25.99 },
    { title: 'Fantasy Four', publication_date: '2012-10-03', rating: 5, price: 12.99 },
    { title: 'Thriller Five', publication_date: '2016-12-19', rating: 4, price: 22.99 },
    { title: 'Adventure One', publication_date: '2000-01-01', rating: 4, price: 15.99 },
    { title: 'Mystery Two', publication_date: '2004-04-15', rating: 5, price: 19.99 },
    { title: 'Science Fiction Three', publication_date: '2008-07-20', rating: 3, price: 25.99 },
    { title: 'Fantasy Four', publication_date: '2012-10-03', rating: 5, price: 12.99 },
    { title: 'Thriller Five', publication_date: '2016-12-19', rating: 4, price: 22.99 },
    { title: 'Adventure One', publication_date: '2000-01-01', rating: 4, price: 15.99 },
    { title: 'Mystery Two', publication_date: '2004-04-15', rating: 5, price: 19.99 },
    { title: 'Science Fiction Three', publication_date: '2008-07-20', rating: 3, price: 25.99 },
    { title: 'Fantasy Four', publication_date: '2012-10-03', rating: 5, price: 12.99 },
    { title: 'Thriller Five', publication_date: '2016-12-19', rating: 4, price: 22.99 }, { title: 'Adventure One', publication_date: '2000-01-01', rating: 4, price: 15.99 },
    { title: 'Mystery Two', publication_date: '2004-04-15', rating: 5, price: 19.99 },
    { title: 'Science Fiction Three', publication_date: '2008-07-20', rating: 3, price: 25.99 },
    { title: 'Fantasy Four', publication_date: '2012-10-03', rating: 5, price: 12.99 },
    { title: 'Thriller Five', publication_date: '2016-12-19', rating: 4, price: 22.99 },
    { title: 'Adventure One', publication_date: '2000-01-01', rating: 4, price: 15.99 },
    { title: 'Mystery Two', publication_date: '2004-04-15', rating: 5, price: 19.99 },
    { title: 'Science Fiction Three', publication_date: '2008-07-20', rating: 3, price: 25.99 },
    { title: 'Fantasy Four', publication_date: '2012-10-03', rating: 5, price: 12.99 },
    { title: 'Thriller Five', publication_date: '2016-12-19', rating: 4, price: 22.99 },
    { title: 'Adventure One', publication_date: '2000-01-01', rating: 4, price: 15.99 },
    { title: 'Mystery Two', publication_date: '2004-04-15', rating: 5, price: 19.99 },
    { title: 'Science Fiction Three', publication_date: '2008-07-20', rating: 3, price: 25.99 },
    { title: 'Fantasy Four', publication_date: '2012-10-03', rating: 5, price: 12.99 },
    { title: 'Thriller Five', publication_date: '2016-12-19', rating: 4, price: 22.99 },
    { title: 'Adventure One', publication_date: '2000-01-01', rating: 4, price: 15.99 },
    { title: 'Mystery Two', publication_date: '2004-04-15', rating: 5, price: 19.99 },
    { title: 'Science Fiction Three', publication_date: '2008-07-20', rating: 3, price: 25.99 },
    { title: 'Fantasy Four', publication_date: '2012-10-03', rating: 5, price: 12.99 },
    { title: 'Thriller Five', publication_date: '2016-12-19', rating: 4, price: 22.99 }, { title: 'Adventure One', publication_date: '2000-01-01', rating: 4, price: 15.99 },
    { title: 'Mystery Two', publication_date: '2004-04-15', rating: 5, price: 19.99 },
    { title: 'Science Fiction Three', publication_date: '2008-07-20', rating: 3, price: 25.99 },
    { title: 'Fantasy Four', publication_date: '2012-10-03', rating: 5, price: 12.99 },
    { title: 'Thriller Five', publication_date: '2016-12-19', rating: 4, price: 22.99 },
    { title: 'Adventure One', publication_date: '2000-01-01', rating: 4, price: 15.99 },
    { title: 'Mystery Two', publication_date: '2004-04-15', rating: 5, price: 19.99 },
    { title: 'Science Fiction Three', publication_date: '2008-07-20', rating: 3, price: 25.99 },
    { title: 'Fantasy Four', publication_date: '2012-10-03', rating: 5, price: 12.99 },
    { title: 'Thriller Five', publication_date: '2016-12-19', rating: 4, price: 22.99 },
    { title: 'Adventure One', publication_date: '2000-01-01', rating: 4, price: 15.99 },
    { title: 'Mystery Two', publication_date: '2004-04-15', rating: 5, price: 19.99 },
    { title: 'Science Fiction Three', publication_date: '2008-07-20', rating: 3, price: 25.99 },
    { title: 'Fantasy Four', publication_date: '2012-10-03', rating: 5, price: 12.99 },
    { title: 'Thriller Five', publication_date: '2016-12-19', rating: 4, price: 22.99 },
    { title: 'Adventure One', publication_date: '2000-01-01', rating: 4, price: 15.99 },
    { title: 'Mystery Two', publication_date: '2004-04-15', rating: 5, price: 19.99 },
    { title: 'Science Fiction Three', publication_date: '2008-07-20', rating: 3, price: 25.99 },
    { title: 'Fantasy Four', publication_date: '2012-10-03', rating: 5, price: 12.99 },
    { title: 'Thriller Five', publication_date: '2016-12-19', rating: 4, price: 22.99 }, { title: 'Adventure One', publication_date: '2000-01-01', rating: 4, price: 15.99 },
    { title: 'Mystery Two', publication_date: '2004-04-15', rating: 5, price: 19.99 },
    { title: 'Science Fiction Three', publication_date: '2008-07-20', rating: 3, price: 25.99 },
    { title: 'Fantasy Four', publication_date: '2012-10-03', rating: 5, price: 12.99 },
    { title: 'Thriller Five', publication_date: '2016-12-19', rating: 4, price: 22.99 },
    { title: 'Adventure One', publication_date: '2000-01-01', rating: 4, price: 15.99 },
    { title: 'Mystery Two', publication_date: '2004-04-15', rating: 5, price: 19.99 },
    { title: 'Science Fiction Three', publication_date: '2008-07-20', rating: 3, price: 25.99 },
    { title: 'Fantasy Four', publication_date: '2012-10-03', rating: 5, price: 12.99 },
    { title: 'Thriller Five', publication_date: '2016-12-19', rating: 4, price: 22.99 },
    { title: 'Adventure One', publication_date: '2000-01-01', rating: 4, price: 15.99 },
    { title: 'Mystery Two', publication_date: '2004-04-15', rating: 5, price: 19.99 },
    { title: 'Science Fiction Three', publication_date: '2008-07-20', rating: 3, price: 25.99 },
    { title: 'Fantasy Four', publication_date: '2012-10-03', rating: 5, price: 12.99 },
    { title: 'Thriller Five', publication_date: '2016-12-19', rating: 4, price: 22.99 },
    { title: 'Adventure One', publication_date: '2000-01-01', rating: 4, price: 15.99 },
    { title: 'Mystery Two', publication_date: '2004-04-15', rating: 5, price: 19.99 },
    { title: 'Science Fiction Three', publication_date: '2008-07-20', rating: 3, price: 25.99 },
    { title: 'Fantasy Four', publication_date: '2012-10-03', rating: 5, price: 12.99 },
    { title: 'Thriller Five', publication_date: '2016-12-19', rating: 4, price: 22.99 }, { title: 'Adventure One', publication_date: '2000-01-01', rating: 4, price: 15.99 },
    { title: 'Mystery Two', publication_date: '2004-04-15', rating: 5, price: 19.99 },
    { title: 'Science Fiction Three', publication_date: '2008-07-20', rating: 3, price: 25.99 },
    { title: 'Fantasy Four', publication_date: '2012-10-03', rating: 5, price: 12.99 },
    { title: 'Thriller Five', publication_date: '2016-12-19', rating: 4, price: 22.99 },
    { title: 'Adventure One', publication_date: '2000-01-01', rating: 4, price: 15.99 },
    { title: 'Mystery Two', publication_date: '2004-04-15', rating: 5, price: 19.99 },
    { title: 'Science Fiction Three', publication_date: '2008-07-20', rating: 3, price: 25.99 },
    { title: 'Fantasy Four', publication_date: '2012-10-03', rating: 5, price: 12.99 },
    { title: 'Thriller Five', publication_date: '2016-12-19', rating: 4, price: 22.99 },
    { title: 'Adventure One', publication_date: '2000-01-01', rating: 4, price: 15.99 },
    { title: 'Mystery Two', publication_date: '2004-04-15', rating: 5, price: 19.99 },
    { title: 'Science Fiction Three', publication_date: '2008-07-20', rating: 3, price: 25.99 },
    { title: 'Fantasy Four', publication_date: '2012-10-03', rating: 5, price: 12.99 },
    { title: 'Thriller Five', publication_date: '2016-12-19', rating: 4, price: 22.99 },
    { title: 'Adventure One', publication_date: '2000-01-01', rating: 4, price: 15.99 },
    { title: 'Mystery Two', publication_date: '2004-04-15', rating: 5, price: 19.99 },
    { title: 'Science Fiction Three', publication_date: '2008-07-20', rating: 3, price: 25.99 },
    { title: 'Fantasy Four', publication_date: '2012-10-03', rating: 5, price: 12.99 },
    { title: 'Thriller Five', publication_date: '2016-12-19', rating: 4, price: 22.99 }, { title: 'Adventure One', publication_date: '2000-01-01', rating: 4, price: 15.99 },
    { title: 'Mystery Two', publication_date: '2004-04-15', rating: 5, price: 19.99 },
    { title: 'Science Fiction Three', publication_date: '2008-07-20', rating: 3, price: 25.99 },
    { title: 'Fantasy Four', publication_date: '2012-10-03', rating: 5, price: 12.99 },
    { title: 'Thriller Five', publication_date: '2016-12-19', rating: 4, price: 22.99 },
    { title: 'Adventure One', publication_date: '2000-01-01', rating: 4, price: 15.99 },
    { title: 'Mystery Two', publication_date: '2004-04-15', rating: 5, price: 19.99 },
    { title: 'Science Fiction Three', publication_date: '2008-07-20', rating: 3, price: 25.99 },
    { title: 'Fantasy Four', publication_date: '2012-10-03', rating: 5, price: 12.99 },
    { title: 'Thriller Five', publication_date: '2016-12-19', rating: 4, price: 22.99 },
    { title: 'Adventure One', publication_date: '2000-01-01', rating: 4, price: 15.99 },
    { title: 'Mystery Two', publication_date: '2004-04-15', rating: 5, price: 19.99 },
    { title: 'Science Fiction Three', publication_date: '2008-07-20', rating: 3, price: 25.99 },
    { title: 'Fantasy Four', publication_date: '2012-10-03', rating: 5, price: 12.99 },
    { title: 'Thriller Five', publication_date: '2016-12-19', rating: 4, price: 22.99 },
    { title: 'Adventure One', publication_date: '2000-01-01', rating: 4, price: 15.99 },
    { title: 'Mystery Two', publication_date: '2004-04-15', rating: 5, price: 19.99 },
    { title: 'Science Fiction Three', publication_date: '2008-07-20', rating: 3, price: 25.99 },
    { title: 'Fantasy Four', publication_date: '2012-10-03', rating: 5, price: 12.99 },
    { title: 'Thriller Five', publication_date: '2016-12-19', rating: 4, price: 22.99 }, { title: 'Adventure One', publication_date: '2000-01-01', rating: 4, price: 15.99 },
    { title: 'Mystery Two', publication_date: '2004-04-15', rating: 5, price: 19.99 },
    { title: 'Science Fiction Three', publication_date: '2008-07-20', rating: 3, price: 25.99 },
    { title: 'Fantasy Four', publication_date: '2012-10-03', rating: 5, price: 12.99 },
    { title: 'Thriller Five', publication_date: '2016-12-19', rating: 4, price: 22.99 },
    { title: 'Adventure One', publication_date: '2000-01-01', rating: 4, price: 15.99 },
    { title: 'Mystery Two', publication_date: '2004-04-15', rating: 5, price: 19.99 },
    { title: 'Science Fiction Three', publication_date: '2008-07-20', rating: 3, price: 25.99 },
    { title: 'Fantasy Four', publication_date: '2012-10-03', rating: 5, price: 12.99 },
    { title: 'Thriller Five', publication_date: '2016-12-19', rating: 4, price: 22.99 },
    { title: 'Adventure One', publication_date: '2000-01-01', rating: 4, price: 15.99 },
    { title: 'Mystery Two', publication_date: '2004-04-15', rating: 5, price: 19.99 },
    { title: 'Science Fiction Three', publication_date: '2008-07-20', rating: 3, price: 25.99 },
    { title: 'Fantasy Four', publication_date: '2012-10-03', rating: 5, price: 12.99 },
    { title: 'Thriller Five', publication_date: '2016-12-19', rating: 4, price: 22.99 },
    { title: 'Adventure One', publication_date: '2000-01-01', rating: 4, price: 15.99 },
    { title: 'Mystery Two', publication_date: '2004-04-15', rating: 5, price: 19.99 },
    { title: 'Science Fiction Three', publication_date: '2008-07-20', rating: 3, price: 25.99 },
    { title: 'Fantasy Four', publication_date: '2012-10-03', rating: 5, price: 12.99 },
    { title: 'Thriller Five', publication_date: '2016-12-19', rating: 4, price: 22.99 }, { title: 'Adventure One', publication_date: '2000-01-01', rating: 4, price: 15.99 },
    { title: 'Mystery Two', publication_date: '2004-04-15', rating: 5, price: 19.99 },
    { title: 'Science Fiction Three', publication_date: '2008-07-20', rating: 3, price: 25.99 },
    { title: 'Fantasy Four', publication_date: '2012-10-03', rating: 5, price: 12.99 },
    { title: 'Thriller Five', publication_date: '2016-12-19', rating: 4, price: 22.99 },
    { title: 'Adventure One', publication_date: '2000-01-01', rating: 4, price: 15.99 },
    { title: 'Mystery Two', publication_date: '2004-04-15', rating: 5, price: 19.99 },
    { title: 'Science Fiction Three', publication_date: '2008-07-20', rating: 3, price: 25.99 },
    { title: 'Fantasy Four', publication_date: '2012-10-03', rating: 5, price: 12.99 },
    { title: 'Thriller Five', publication_date: '2016-12-19', rating: 4, price: 22.99 },
    { title: 'Adventure One', publication_date: '2000-01-01', rating: 4, price: 15.99 },
    { title: 'Mystery Two', publication_date: '2004-04-15', rating: 5, price: 19.99 },
    { title: 'Science Fiction Three', publication_date: '2008-07-20', rating: 3, price: 25.99 },
    { title: 'Fantasy Four', publication_date: '2012-10-03', rating: 5, price: 12.99 },
    { title: 'Thriller Five', publication_date: '2016-12-19', rating: 4, price: 22.99 },
    { title: 'Adventure One', publication_date: '2000-01-01', rating: 4, price: 15.99 },
    { title: 'Mystery Two', publication_date: '2004-04-15', rating: 5, price: 19.99 },
    { title: 'Science Fiction Three', publication_date: '2008-07-20', rating: 3, price: 25.99 },
    { title: 'Fantasy Four', publication_date: '2012-10-03', rating: 5, price: 12.99 },
    { title: 'Thriller Five', publication_date: '2016-12-19', rating: 4, price: 22.99 },
  ];

  try {
    // Добавить авторов
    const authors = await Promise.all(authorsData.map(authorData => db.Author.create(authorData)));

    // Добавить книги с случайными авторами
    await Promise.all(booksData.map(bookData => {
      const author = authors[Math.floor(Math.random() * authors.length)];
      return db.Book.create({ ...bookData, author_id: author.id });
    }));

    console.log('Random data added to the database');
  } catch (error) {
    console.error('Error adding random data:', error);
  }
};




