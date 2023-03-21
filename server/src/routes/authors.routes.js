const controller = require("../controllers/authors");

//Там что то было про исключения еще, тут мы можем валидировать запросы/заголовки/навешивать какие нибудь мидлварены
module.exports = function (app) {
    app.get('/authors', controller.get);
    app.post('/authors/create', controller.create);
    app.post('/authors/update', controller.update);
    app.post('/authors/delete', controller.delete);
}