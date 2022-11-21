const express = require('express')
const router = express.Router()
const controlls=require('../controllers/corporateTraineeController')
const { route } = require('./courseRoutes')
const { protect } = require('../middleware/CorpTraineeAuthMiddleware')
const instructorControlls=require('../controllers/instructorsController')
const coursesControlls=require('../controllers/coursesController')



router.get('/alltrainees',controlls.getAllcrpTrainee);
router.post('/addtrainee',controlls.setcrpTrainee);
router.get('/getOneTrainee/:id',controlls.getOnecrpTrainee);
router.delete('/deletetrainee/:id',controlls.deletecrpTrainee);
router.put('/updatecorptrainee/:id',controlls.updatecrptrainee);
router.put('/changepassword',controlls.changepassword);
router.put('rateInstructor/:id',instructorControlls.rating);
router.put('../rateCourse/:id',coursesControlls.rating)
router.post('/loginCorpTrainee',controlls.loginCorpTrainee);
router.post('/forgetpassword',controlls.sendEmailcrop)
router.get('/me',protect, controlls.getMe);


module.exports=router;