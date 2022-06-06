const express = require('express');
const router = express.Router();
const UserModel= require("../models/bookModel.js")
const bookController= require("../controllers/bookController")

router.post('/createBook', bookController.createBook)

router.get('/showBookData',bookController.showBookData)

module.exports = router;