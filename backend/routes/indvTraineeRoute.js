const express = require('express')
const router = express.Router()
const controlls=require('../controllers/individualTraineeController')
const instructorControlls=require('../controllers/instructorsController')
const coursesControlls=require('../controllers/coursesController')

//const { route } = require('./courseRoutes')

const {
    registerIndTrainee, loginIndTrainee, getMe, getAllinvdTrainees } = require('../controllers/individualTraineeController')
  const { protect } = require('../middleware/IndivTraineeAuthMiddleware')


router.get('/allindvtrainees',controlls.getAllinvdTrainee);
router.get('/getAllinvdTrainees',controlls.getAllinvdTrainees);
router.get('/getAllinvdTrainees',getAllinvdTrainees);



router.post('/addindvtrainee',controlls.setindvTrainee);
router.get('/getOneindvTrainee',controlls.getOneindvTrainee);
router.delete('/deleteindvTrainee/:id',controlls.deleteindvTrainee);
router.put('/updateindvtrainee/:id',controlls.updateindvtrainee);
router.put('/changepassword',controlls.changepassword);
router.put('/rateInstructor/:id',instructorControlls.rating);
router.put('/rateCourse/:id',coursesControlls.rating)
router.post('/forgetpassword',controlls.sendEmailIndv)
router.post('/registerIndTrainee', registerIndTrainee);
router.post('/loginIndTrainee', loginIndTrainee);
router.get('/me', protect, getMe);



module.exports=router;