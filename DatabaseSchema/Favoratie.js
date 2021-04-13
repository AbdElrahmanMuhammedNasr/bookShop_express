const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const FavoriteSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    bookId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Book',
    },

})

module .exports = mongoose.model('Favor', FavoriteSchema)
