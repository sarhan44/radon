const authorModel = require("../models/authorModel");
const bookModel = require("../models/bookModel");
const publisherModel = require("../models/publisherModel");

// =========[ 3- Create Books API]============

const createBook= async function (req, res) {
    let book = req.body
// --------------(a)
    let authorId = book.author_id
    if(!authorId)return res.send("Author Id Is requaired")
// --------------(b)
    let authorData = await authorModel.findById(authorId)
    if (!authorData) return res.send("Invalid Author Id")
// --------------(c)
    let pubId = book.publisher_id
    if(!pubId) return res.send("Publisher Id Is requaired")
// --------------(d)
    let pubData = await publisherModel.findById(pubId)
    if(!pubData) return res.send("Invalid Publisher Data")
// --------------(create)
    let allData = await bookModel.create(book)
    res.send(allData)
}


// =========[ 4- Get Book With Author & Publisher detail ]============

const getAllBooks = async function (req, res) {
    let book = await bookModel.find().populate(["author_id", "publisher_id"]);
    res.send({data: book,});
}

// =========[ 5 ]============

const books = async function (req, res) {
    let updateSchema = await bookModel.collection.updateMany(
        {},{$set:{"isCoverHard": false}} )
    let changevalue = await bookModel.updateMany({publisher_id: ["62a22715f5d28a6d263c3f0a", "62a226c3f5d28a6d263c3f04"]},{$set : {"isCoverHard": true }})
    
    
    res.send({data: changevalue})
}

// =========[ Export APIs]============

module.exports.createBook = createBook
module.exports.getAllBooks = getAllBooks
module.exports.books = books
