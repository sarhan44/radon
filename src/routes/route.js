const express = require('express');
const router = express.Router();
const BookController= require("../controllers/bookController")


// ---------[ Create Book ]---->
router.post("/createBook", BookController.createBook  )

// ---------[ Book List ]---->
router.get("/bookList", BookController.bookList)

// ---------[ Get Books BY Year ]---->
router.post("/getBooksInYear", BookController.getBooksInYear )

// ---------[ Get Perticular Book ]---->
router.post("/getPerticularBook", BookController.getPerticularBook )

// ---------[ Get X INR Books ]---->
router.get("/getXINRBooks", BookController.getXINRBooks  )

// ---------[ Get Random Books ]---->
router.get("/getRandomBooks", BookController.getRandomBooks)


module.exports = router;