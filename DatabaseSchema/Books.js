const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const BookSchema = new Schema({

    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    }, image: {
        type: Array,
        required: true
    }, name: {
        type: String,
        required: true
    }, snapshot: {
        type: String,
        required: true
    }, link: {
        type: String,
        required: false
    }, category: {
        type: Array,
        required: true
    }, likes: {
        type: Number,
    }, dislikes: {
        type: Number,
    }, created: {
        type: Date,
        required: true
    }

})
module.exports = mongoose.model('Book', BookSchema)
