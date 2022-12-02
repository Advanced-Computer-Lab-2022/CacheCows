const express = require('express')
const router = express.Router()
const controlls = require('../controllers/answersController.js')


router.get('/getAnswers',controlls.getAnswers);
router.get('/getAnswer',controlls.getAnswer);


module.exports = router