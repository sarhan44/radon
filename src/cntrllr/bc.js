const bm = require("../modell/bm")




const createBook = async function(req, res) {
    let data = req.body
    let safeData = await bm.create(data)
    res.send({ msg: safeData })
}


const bookList = async function(req, res) {
    let allbooks = await bm.find()
    res.send({ msg: allbooks })
}
const getBooksInYear = async function(req, res) {
    let putdata = req.body.year
    let getbooks = await bm.find({
        "year": putdata
    })

    res.send({ msg: getbooks })
}
const getParticularBooks = async function(req, res) {
    let putparticular = req.body
    let getParticular = await bm.find(
        putparticular)

    res.send({ msg: getParticular })
}
const getXINRBooks = async function(re, res) {
    let InrBooks = await bm.find({
        $or: [{
            "price.indianPrice": {
                $eq: "100 rs "
            },
            "price.indianPrice": {
                $eq: "200 rs "
            },
            "price.indianPrice": {
                $eq: "500 rs "
            },
        }]

    })
    res.send({ msg: InrBooks })
}
const getRandomBooks = async function(req, res) {
    let RandomBooks = await bm.find({ $or: [{ stockAvailable: true }, { totalPages: { $gt: 500 } }] })
    res.send({ msg: RandomBooks })
}

module.exports.createBook = createBook
module.exports.bookList = bookList
module.exports.getBooksInYear = getBooksInYear
module.exports.getParticularBooks = getParticularBooks
module.exports.getRandomBooks = getRandomBooks
module.exports.getXINRBooks = getXINRBooks