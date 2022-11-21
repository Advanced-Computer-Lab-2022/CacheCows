const express = require('express')
const controlls=require('../controllers/corporateTraineeController')
const { route } = require('./courseRoutes')
const instructorControlls=require('../controllers/instructorsController')
const coursesControlls=require('../controllers/coursesController')

const { protect } = require('../middleware/CorpTraineeAuthMiddleware')
const router = express.Router()

// require auth for all workout routes
router.use(protect)


router.get('/alltrainees',controlls.getAllcrpTrainee);
router.post('/addtrainee',controlls.setcrpTrainee);
router.get('/getOneTrainee/:id',controlls.getOnecrpTrainee);
router.delete('/deletetrainee/:id',controlls.deletecrpTrainee);
router.put('/updatecorptrainee/:id',controlls.updatecrptrainee);
router.put('/changepassword/:id',controlls.changepassword);
router.put('rateInstructor/:id',instructorControlls.rating);
router.put('../rateCourse/:id',coursesControlls.rating)
router.post('/loginCorpTrainee',controlls.loginCorpTrainee);
router.post('/forgetpassword',controlls.sendEmailcrop)
router.get('/me',protect, controlls.getMe);


module.exports=router;