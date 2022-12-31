const express = require('express')
const controlls=require('../controllers/individualTraineeController')

const coursesControlls=require('../controllers/coursesController')
const {registerIndTrainee, loginIndTrainee, getMe, getAllinvdTrainees ,sendEmailIndv,changepassword, sendCertificateEmail} = require('../controllers/individualTraineeController')


const { protect } = require('../middleware/IndivTraineeAuthMiddleware')

const router = express.Router()

// require auth for all workout routes
router.post('/registerIndTrainee', registerIndTrainee);
router.post('/loginIndTrainee', loginIndTrainee);
router.post('/forgetpassword',sendEmailIndv)
router.put('/changepassword',changepassword);
router.post('/sendCertificateEmail',sendCertificateEmail)
router.post('/paycourse',controlls.paycourse)
router.delete('/del',controlls.del)
router.get('/getOneindvTrainee',controlls.getOneindvTrainee);
router.use(protect)



router.get('/allindvtrainees',controlls.getAllinvdTrainee);
router.get('/getAllinvdTrainees',controlls.getAllinvdTrainees);
router.post('/addindvtrainee',controlls.setindvTrainee);
router.post('/viewwallet',controlls.viewwallet)

router.delete('/deleteindvTrainee',controlls.deleteIndvTrainee);
router.put('/updateindvtrainee/:id',controlls.updateindvtrainee);


router.put('/rateCourse',coursesControlls.rating)
router.put('/rateinstructor',controlls.rating)
router.post('/registercourse',controlls.registercourse)
router.get('/getregistercourses',controlls.getregistercourses)

router.post('/reviewinst',controlls.reviewinst)


router.get('/me', protect, getMe);
router.get('/getallreg', protect, controlls.getallreg);



module.exports=router;