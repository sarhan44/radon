const express = require('express');
const router = express.Router();
const commonMW = require ("../middlewares/commonMiddlewares")
const MwController = require ("../controllers/middlewareController")

// ===========[ Using Globle Middleware ]
router.get("/basicApi",  MwController.basicApi)
router.get("/basicApi2", MwController.basicApi2)

// ============[ Using Local Middleware]
router.get("/basicApi3", commonMW.mid1, MwController.basicApi3)
router.get("/basicApi4", commonMW.mid1, MwController.basicApi4)

module.exports = router;