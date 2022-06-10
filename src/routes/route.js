// =========[ Import External ]============
const express = require('express');
const router = express.Router();

// =========[ Import Local Modules]============
const publisherController = require("../controllers/publisherController")
const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")

// =========[ TEST API]============
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// =========[ ALL Post APIs ]============
router.post("/createAuthor", authorController.createAuthor  )
router.post("/createPublisher", publisherController.createPublisher  )
router.post("/createBook", bookController.createBook  )

// =========[ ALL GET APIs ]============
router.get("/getAuthorsData", authorController.getAuthorsData)
router.get("/getAllBooks", bookController.getAllBooks)

// =========[ ALL PUT APIs ]============
router.put("/books", bookController.books)



module.exports = router;