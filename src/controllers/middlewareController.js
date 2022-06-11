

const basicApi = async (req, res) =>{
    res.send("the middleware is working")
}
const basicApi2 = async (req, res) =>{
    res.send("the middleware is working with 2nd Api")
}
const basicApi3 = async (req, res) =>{
    res.send("the middleware is working with 3nd Api")
}
const basicApi4 = async (req, res) =>{
    res.send("the middleware is working with 4nd Api")
}

module.exports.basicApi = basicApi
module.exports.basicApi2 = basicApi2
module.exports.basicApi3 = basicApi3
module.exports.basicApi4 = basicApi4