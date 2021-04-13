const Favor = require('../DatabaseSchema/Favoratie')


exports.addToFavor = async (req, res, next) => {

    const {bookId} = req.params
    const {userId} = req.user

    const favor = new Favor({
        userId,
        bookId,
    })

    const result = await favor.save();
    res.status(200).json(result)
}

exports.getFavorUser = async (req, res, next) => {
    const {userId} = req.user
    const result = await Favor
        .find({'userId': userId})
        .populate('BookId')

    res.status(200).json(result)

}
