const mongoose = require('mongoose');

const bSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true
    },
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    year: {
        type: Number,
        default: 2021
    },
    tags: [String],
    authorName: String,
    totalPages: Number,
    stockAvailable: Boolean,
}, { timestamps: true });


module.exports = mongoose.model('BookList', bSchema)