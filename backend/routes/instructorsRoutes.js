const express = require('express')
const controlls=require('../controllers/instructorsController.js')

const {
    registerInstructor,
    loginInstructor,
    // registerInstructor2,
    getMe,
  } = require('../controllers/instructorsController')
  const { protect } = require('../middleware/InstructorAuthMiddleware')
  const router = express.Router()

// require auth for all workout routes
router.use(protect)

 

router.get('/getInstructors',controlls.getInstructors);
router.post('/setInstructor',controlls.setInstructor);
router.get('/getInstructor',controlls.getInstructor);
router.delete('/deleteInstructor/:id',controlls.deleteInstructor);
router.put('/updateInstructor',controlls.updateInstructor);
router.post('/createcourse/:id',controlls.createCourse)
router.put('/changepassword/:id',controlls.changepassword);
router.post('/forgetpassword/:id',controlls.sendEmailInstructor)

 
router.post('/registerInstructor', registerInstructor);
// router.post('/registerInstructor2', registerInstructor2);


router.post('/loginInstructor', loginInstructor);

router.post('/me', protect, getMe);

module.exports = router  



