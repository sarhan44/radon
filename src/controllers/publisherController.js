const publisherModel= require("../models/publisherModel")

// =========[ Create Publishers API]============
const createPublisher= async function (req, res) {
    let publisher = req.body
    let publisherCreated = await publisherModel.create(publisher)
    res.send({data: publisherCreated})
}
// =========[ List Publishers API]============
const getPublisherData= async function (req, res) {
    let publisher = await publisherModel.find()
    res.send({data: publisher})
}

module.exports.createPublisher= createPublisher
module.exports.getPublisherData= getPublisherData