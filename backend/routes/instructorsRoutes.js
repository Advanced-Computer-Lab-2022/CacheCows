const express = require('express')
const router = express.Router()
const controlls=require('../controllers/instructorsController')


router.get('/getInstructors',controlls.getInstructors);
router.post('/setInstructor',controlls.setInstructor);
router.get('/getInstructor',controlls.getInstructor);
router.delete('/deleteInstructor/:id',controlls.deleteInstructor);
router.put('/updateInstructor/:id',controlls.updateInstructor);
router.post('/createcourse/:id',controlls.createCourse)

module.exports = router  



