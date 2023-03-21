const db = require("../models");

exports.get = async (req, res) => {
    try {
        const authors = await db.Author.findAll();

        res.json({
            data: authors,
            totalCount: authors.length,
        });

    } catch (error) {
        console.error(error);
        res.status(500).send('Error');
    }

}
exports.create = async (req, res) => {
    try {

        console.log('/authors/create', req.body)
        const newAuthor = await db.Author.create({
            name: req.body.name,
            birth_date: req.body.birth_date
        })
        const authors = await db.Author.findAll();


        res.json({
            data: authors,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error');
    }

}
exports.update = async (req, res) => {
    try {

        console.log('/authors/update', req.body)
        const upAuthor = await db.Author.findByPk(req.body.id)
        if (!upAuthor) {
            console.log('Пользователь не найден');
            return;
        }

        // Обновить данные пользователя
        await upAuthor.update({ name: req.body.name, birth_date: req.body.birth_date });

        console.log('Данные пользователя обновлены');
        const authors = await db.Author.findAll();


        res.json({
            data: authors,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error');
    }

}
exports.delete = async (req, res) => {
    try {

        const delAuthor = await db.Author.findByPk(req.body.id)

        if (!delAuthor) {
            console.log('Пользователь не найден');
            return;
        }
        await delAuthor.destroy();

        console.log('Пользователь удален');
        const authors = await db.Author.findAll();


        res.json({
            data: authors,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error');
    }

}