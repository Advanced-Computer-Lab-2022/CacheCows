const express = require('express')
const router = express.Router()
const controlls = require('../controllers/examsController.js')

router.get('/getExams',controlls.getExams);
router.get('/getCExams',controlls.getCourseExams);
router.post('/setExam',controlls.setExam);
router.post('/setGrade',controlls.setGrade);
router.get('/getUserExams',controlls.getuserexam);


module.exports = router  