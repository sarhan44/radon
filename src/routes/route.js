const express = require('express');
const newLogger  = require('../logger/logger')
const utilFolder = require('../util/helper')
const validatorFolder = require('../validator/formatter')

const router = express.Router();

router.get('/test-me', function (req, res) {
    // ===[Module 1]==
    newLogger.welcome()
     // ===[Module 2]==
    utilFolder.printDate()
    utilFolder.printmonth()
    utilFolder.getBatchInfo()
     // ===[Module 3]==
     validatorFolder.trim_fun()
     validatorFolder.changeLower()
     validatorFolder.changeUpper()

    res.send('My first ever api!')
});

module.exports = router;
// adding this comment for no reason