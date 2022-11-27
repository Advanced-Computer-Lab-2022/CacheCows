const express = require('express')
const controlls=require('../controllers/individualTraineeController')

const coursesControlls=require('../controllers/coursesController')
const {registerIndTrainee, loginIndTrainee, getMe, getAllinvdTrainees ,sendEmailIndv} = require('../controllers/individualTraineeController')


const { protect } = require('../middleware/IndivTraineeAuthMiddleware')

const router = express.Router()

// require auth for all workout routes
router.post('/registerIndTrainee', registerIndTrainee);
router.post('/loginIndTrainee', loginIndTrainee);
router.post('/forgetpassword',sendEmailIndv)
router.use(protect)



router.get('/allindvtrainees',controlls.getAllinvdTrainee);
router.get('/getAllinvdTrainees',controlls.getAllinvdTrainees);
router.get('/getAllinvdTrainees',getAllinvdTrainees);
router.post('/addindvtrainee',controlls.setindvTrainee);
router.get('/getOneindvTrainee',controlls.getOneindvTrainee);
router.delete('/deleteindvTrainee',controlls.deleteIndvTrainee);
router.put('/updateindvtrainee/:id',controlls.updateindvtrainee);
router.post('/changepassword',controlls.changepassword);

router.put('/rateCourse/:id',coursesControlls.rating)
router.put('/rateinstructor',controlls.rating)
router.post('/registercourse',controlls.registercourse)
router.get('/getregistercourses',controlls.getregistercourses)


router.get('/me', protect, getMe);



module.exports=router;