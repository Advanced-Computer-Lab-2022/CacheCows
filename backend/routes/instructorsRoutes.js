const express = require('express')
const router = express.Router()
const controlls=require('../controllers/instructorsController')

const {
    registerInstructor,
    loginInstructor,
    // registerInstructor2,
    getMe,
  } = require('../controllers/instructorsController')
  const { protect } = require('../middleware/InstructorAuthMiddleware')
 

router.get('/getInstructors',controlls.getInstructors);
router.post('/setInstructor',controlls.setInstructor);
router.get('/getInstructor',controlls.getInstructor);
router.delete('/deleteInstructor/:id',controlls.deleteInstructor);
router.put('/updateInstructor',controlls.updateInstructor);
router.post('/createcourse/:id',controlls.createCourse)

 
router.post('/registerInstructor', registerInstructor);
// router.post('/registerInstructor2', registerInstructor2);


router.post('/loginInstructor', loginInstructor);

router.get('/me', protect, getMe);

module.exports = router  



