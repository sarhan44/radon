const express = require('express');
const router = express.Router();
const controllerbook = require("../cntrllr/bookcontroller")



router.post("/createBook", controllerbook.createBook)
router.get("/bookList", controllerbook.bookList)
router.post("/getBooksInYear", controllerbook.getBooksInYear)
router.post("/getParticularBooks", controllerbook.getParticularBooks)
router.get("/getXINRBooks", controllerbook.getXINRBooks)
router.get("/getRandomBooks", controllerbook.getRandomBooks)

module.exports = router;
router;