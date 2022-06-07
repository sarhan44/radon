const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type: String,
        required: true
    }, 
    authorName: String, 
    tags: [String], 
    totalPages: Number,
    year:{type: Number, default: 2021},
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    stockAvailable:Boolean,
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
