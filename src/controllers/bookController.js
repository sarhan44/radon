// ---------[ Import Files ]---->
const { count } = require("console")
const bookModel = require("../models/bookModel")
const BookModel= require("../models/bookModel")


// ---------[ Create Book ]---->
const createBook= async function (req, res) {
    let data = req.body
    let savedData = await BookModel.create(data)
    res.send({msg: savedData})
}

// ---------[ Book List ]---->
const bookList= async function (req, res) {
    let allBooks = await BookModel.find().select({bookName: 1, authorName:1, _id:0 })
    res.send({msg: allBooks})

}

// ---------[ Get Books BY Year ]---->
const getBooksInYear= async function (req, res){
    let bookByYear= req.body.year
    let allBooks= await bookModel.find({ "year": bookByYear })
    res.send({msg: allBooks})
}

// ---------[ Get Perticular Book ]---->
const getPerticularBook= async function(req, res){
    let getBook = req.body
    let allBooks= await bookModel.find( getBook )
    res.send({msg: allBooks})
}

// ---------[ Get X INR Books ]---->
const getXINRBooks= async function(req, res){
    let booksINR = await bookModel.find({ "prices.indianPrice": {$in :[ "100", "200", "500" ]}
 })
    res.send({msg: booksINR})
}

// ---------[ Get Random Books ]---->
const getRandomBooks= async function(req,res){
    let RandomBooks = await bookModel.find({
        $or: [ { totalPages : {$gt : 500 } }, {stockAvailable : true }  ]
    })
    res.send({msg: RandomBooks})    
}


// ---------[ Exports All API ]---->
module.exports.createBook= createBook
module.exports.bookList= bookList
module.exports.getBooksInYear= getBooksInYear
module.exports.getPerticularBook= getPerticularBook
module.exports.getXINRBooks= getXINRBooks
module.exports.getRandomBooks = getRandomBooks