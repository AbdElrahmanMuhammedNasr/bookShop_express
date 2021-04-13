const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    }, password: {
        type: String,
        required: false
    }, email: {
        type: String,
        required: true,
        unique: true
    }, created: {
        type: Date,
        required: true
    },


})

module.exports = mongoose.model('User', UserSchema);
