const express = require('express');
const router = express.Router();
const newController = require("../controllers/newBookController")

router.post("/newBook", newController.newBook)
router.post("/newAuthor", newController.newAuthor)
router.get("/booksByChetan", newController.booksByChetan)
router.get("/authorOfBook", newController.authorOfBook)
router.get("/costList", newController.costList)
    // router.get("/bookList", controllerbook.bookList)
    // router.post("/getBooksInYear", controllerbook.getBooksInYear)
    // router.post("/getParticularBooks", controllerbook.getParticularBooks)
    // router.get("/getXINRBooks", controllerbook.getXINRBooks)
    // router.get("/getRandomBooks", controllerbook.getRandomBooks)

module.exports = router;