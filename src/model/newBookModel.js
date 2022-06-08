const mongoose = require('mongoose');
const newBookSchema = new mongoose.Schema({
    name: String,
    author_id: {
        type: Number,
        required: true
    },
    price: Number,
    rating: Number

}, { timestamps: true });



module.exports = mongoose.model('newBook', newBookSchema)