const express = require('express');
const router = express.Router();
const newController = require("../controllers/newBookController")

router.post("/newBook", newController.newBook)
router.post("/createAuthor", newController.createAuthor)
router.get("/booksByChetan", newController.booksByChetan)
router.get("/authorOfBook", newController.authorOfBook)
router.get("/costList", newController.costList)

module.exports = router