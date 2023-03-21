const db = require("../models");

exports.get = async (req, res) => {
    try {
        const startRow = parseInt(req.query.start) || 0;
        const endRow = parseInt(req.query.end) || 10;
        const books = await db.Book.findAll();
        let resarr = []
        for (let book of books) {
            resarr.push(book.dataValues)
        }
        const results = books.slice(startRow, endRow);

        res.json({
            data: results,
            totalCount: books.length,
        });

    } catch (error) {
        console.error(error);
        res.status(500).send('Error');
    }
}
