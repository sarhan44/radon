const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middleware = require("../middleware/middlewares")

// ========[Test]==========
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// ========[Post]==========

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

// ========[Get]==========
router.get("/users/:userId", middleware.mid, userController.getUserData)

// ========[Put]==========
router.put("/users/:userId",middleware.mid, userController.updateUser)

// ========[Delete]==========
router.delete("/users/:userId",middleware.mid, userController.deleteUser)

module.exports = router;