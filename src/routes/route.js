const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const weatherController= require("../controllers/weatherController")
const memesController= require("../controllers/memesController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// ==========[ COWIN ROUTER]=============

router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByDistricts", CowinController.getByDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)
router.post("/cowin/getOtp", CowinController.getOtp)

// ==========[ WEATHER ROUTER]=============

router.get("/getWeather",  weatherController.getWeather)
router.get("/getTempLondon",  weatherController.getTempLondon)
router.get("/getSortedCities",  weatherController.getSortedCities)

// ==================[MEMES]=============

router.get("/getAllMemes", memesController.getAllMemes)
router.post("/getMeme", memesController.getMeme)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;