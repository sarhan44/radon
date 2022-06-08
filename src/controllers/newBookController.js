const bookModel = require("../model/newBookModel")
const authorModel = require("../model/authormodel")


// ----------[ Create Books & Authors ]

const newBook = async function(req, res) {
    let data = req.body
    let saveData = await bookModel.create(data)
    res.send({ msg: saveData })
}
const createAuthor = async function(req, res) {
    let datas = req.body
    let authorData = await authorModel.create(datas)
    res.send({ msg: authorData })
}

// ----------[ books By Chetan ]

const booksByChetan = async function(req, res) {
        let id_data = await authorModel.find({ author_name: "Chetan Bhagat" }).select("author_id")
        let booklist = await bookModel.find({ author_id: id_data[0].author_id })
        res.send({ msg: booklist })
}

// ----------[ author Of Book two state ]

const authorOfBook = async function(req, res) {
    let book = await bookModel.findOneAndUpdate({ name: "Two states" }, { $set: { price: 100 } }, { new: true })
    let author = await authorModel.find({ author_id: book.author_id }).select("author_name");
    let cost = book.price
    res.send({ msg: author, cost })

}

// ----------[ Cost & Author Name ]

const costList = async function(req,res){
    const bookData = await bookModel.find({price: {$gte: 50, $lte: 100}}).select({author_id:1, _id:0 })
    const id = bookData.map(inp => inp.author_id)

    let temp = []

    for(let i=0;i<id.length;i++){
        let x = id[i]
        const author = await authorModel.find({ author_id:x}).select({author_name:1, _id:0})
        temp.push(author)
    }
    const author_name = temp.flat()
    res.send({msg: author_name})
}

// ----------[ books by authorid ]


module.exports.costList = costList
module.exports.newBook = newBook
module.exports.createAuthor = createAuthor
module.exports.booksByChetan = booksByChetan
module.exports.authorOfBook = authorOfBook
