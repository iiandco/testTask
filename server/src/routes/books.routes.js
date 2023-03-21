const controller = require("../controllers/books");

module.exports = function(app) {
    app.get('/books', controller.get);
      
}