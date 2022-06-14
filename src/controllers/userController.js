  const jwt = require("jsonwebtoken");
  const userModel = require("../models/userModel");


    // =====================[ Create Users]===============

  const createUser = async function (abcd, xyz) {
    let data = abcd.body;
    let savedData = await userModel.create(data);
    xyz.send({msg: savedData,});
  };

  // =====================[ login Users]===============

  const loginUser = async function (req, res) {
    let userName = req.body.emailId;
    let password = req.body.password;
    let user = await userModel.findOne({
      emailId: userName,
      password: password,
    });
    if (!user)
      return res.send({status: false, msg: "username or the password is not corerct",});
      // ---------[Create Token JWT]---------
    let token = jwt.sign(
      {
        userId: user._id.toString(),
        batch: "radon",               //payload data
        organisation: "FunctionUp",
    },
      "functionup-radon" //Secret Key
);
    res.setHeader("x-auth-token", token);
    res.send({status: true,token: token,});
  };


  // =====================[ Get Users]===============

  const getUserData = async function (req, res) {
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    let userDetails = await userModel.findById(userId)
    if (!user) {
      return res.send("No such user exists");
    }
    res.send({status: true, data: userDetails,});
  };

  // =====================[ Update Users]===============

  const updateUser = async function (req, res) {
    let userData = req.body;
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    if (!user) {
      return res.send("No such user exists");
    }
    let updatedUser = await userModel.findOneAndUpdate({_id: userId,},userData);
    res.send({status: updatedUser,data: updatedUser,});
  };

  // =================[ Delete User ]==============

  const deleteUser = async function (req, res) {
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    if (!user) {
      return res.send("No such user exists");
    }

    let userData = req.body;
    let updatedUser = await userModel.findOneAndUpdate({_id: userId,},userData);
    res.send({status: userData,data: updatedUser,});
  };


  // =====================[ Exports ]===============

  module.exports.createUser = createUser;
  module.exports.getUserData = getUserData;
  module.exports.updateUser = updateUser;
  module.exports.loginUser = loginUser;
  module.exports.deleteUser = deleteUser;
