const Book = require('../DatabaseSchema/Books')

exports.addNewBook = async (req, res, next) => {
    const bookBody = req.body;
    const book = new Book({
        ...bookBody,
        created: new Date()

    })
    const result = await book.save();
    res.status(200).json(result)

}

exports.getBestBooks = async (req, res, next) => {
    const {limit} = req.params

    const result = await Book
        .find({'like':{ $gt: 1 }})
        .limit(parseInt(limit))

    if (result === null) {
        return res.status(200).json([]);
    }

    res.status(200).json(result);

}

exports.getNewBooks = async (req, res, next) => {
    const {limit} = req.params

    const result = await Book
        .find({'created': {
                $gt:  new Date(),
                $lt:  new Date().getMonth() -2
            }})
        .limit(parseInt(limit))

    if (result === null) {
        return res.status(200).json([]);
    }

    res.status(200).json(result);

}
