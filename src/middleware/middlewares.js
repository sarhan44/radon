const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel")


const mid = async (req ,res, next) =>{
    // ===[Check Header Is Present Or Not]
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    if (!token) return res.send({ status: false, msg: "token must be present" });

    // ====[ Check Token Is Valid or not]
    let decodedToken = jwt.verify(token, "functionup-radon");
    if (!decodedToken) return res.send({ status: false, msg: "token is invalid" });

    next()
}

module.exports.mid = mid