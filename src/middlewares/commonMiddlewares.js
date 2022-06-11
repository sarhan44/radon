
const mid1=  ( req, res, next) => {
    console.log( new Date(), req.ip, req.path)
    next()
}

module.exports.mid1= mid1

