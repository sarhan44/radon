const express = require('express');
const router = express.Router();
const cb = require("../cntrllr/bc")




// router.post('/createBook', BookControllers.createBook)

// router.get('/showBookData', BookControllers.showBookData)


// router.post("/getBooksInYear", CB.getBooksInYear)
router.post("/createBook", cb.createBook)

router.get("/bookList", cb.bookList)
router.post("/getBooksInYear", cb.getBooksInYear)
router.post("/getParticularBooks", cb.getParticularBooks)
router.get("/getXINRBooks", cb.getXINRBooks)
router.get("/getRandomBooks", cb.getRandomBooks)

// router.get("/test-me", function(req, res) {
//     res.send("My first ever api!")
// })

// router.post("/createUser", UserController.createUser)

// router.get("/getUsersData", UserController.getUsersData)

// module.exports = router;
// router.get("/test-me", function(req, res) {
//     res.send("My first ever api!")
// })

// router.post("/createUser", BookControllers.createUser)

// router.get("/getUsersData", BookControllers.showBookData)

// router.post("/createBook", BookController.createBook)

// router.get("/getBooksData", BookController.getBooksData)

module.exports = router;
router;