const express = require('express')
const router = express.Router()
const controlls = require('../controllers/examsController.js')

router.get('/getExams',controlls.getExams);
router.post('/getCExams',controlls.getCourseExams);
router.post('/setExam',controlls.setExam);
router.post('/setGrade',controlls.setGrade);
router.get('/getUserExams',controlls.getuserexam);
router.delete('/',controlls.del);
router.delete('/a',controlls.dela);
router.post('/getAnswer',controlls.getAnswer);

module.exports = router  