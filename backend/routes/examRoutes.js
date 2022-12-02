const express = require('express')
const router = express.Router()
const controlls = require('../controllers/examController.js')


router.get('/getExams',controlls.getExams);
router.get('/getExam',controlls.getExam);




module.exports = router