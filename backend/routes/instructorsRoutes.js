const express = require('express')
const controlls=require('../controllers/instructorsController.js')

const {
    registerInstructor,
    loginInstructor,
    // registerInstructor2,
    sendEmailInstructor,
    getMe,
    changepassword
  } = require('../controllers/instructorsController')
  const { protect } = require('../middleware/InstructorAuthMiddleware')
  const router = express.Router()

// require auth for all workout routes
router.post('/loginInstructor', loginInstructor);
router.post('/registerInstructor', registerInstructor);
router.post('/forgetpassword',sendEmailInstructor);
router.post('/getIRate',controlls.getIRate);
router.put('/changepassword',changepassword);
router.post('/InstructorEditBiography',controlls.InstructorEditBiography);
router.post('/InstructorEditEmail',controlls.InstructorEditEmail);
router.put('/owed',controlls.owed)
router.put('/temp',controlls.temp)
router.get('/viewowed',controlls.viewowed)

//router.use(protect)

 

router.get('/getInstructors',controlls.getInstructors);
router.post('/setInstructor',controlls.setInstructor);
router.get('/getInstructor',controlls.getInstructor);
router.delete('/deleteInstructor',controlls.deleteInstructor);
router.put('/updateInstructor',controlls.updateInstructor);
router.post('/createcourse/:id',controlls.createCourse)

;
router.post('/InstructorAcceptTerms',controlls.InstructorAcceptTerms);
router.post('/InstructorSetDiscount',controlls.InstructorSetDiscount);

router.use(protect)
router.post('/InstructorAcceptTerms',controlls.InstructorAcceptTerms);


//router.post('/InstructorSetDiscount',controlls.InstructorSetDiscount);



router.post('/me', protect, getMe);

module.exports = router  



