const express = require('express')
const controlls=require('../controllers/corporateTraineeController')
const {sendEmailcrop,loginCorpTrainee,changepassword, sendCertificateEmail}=require('../controllers/corporateTraineeController')
const { route } = require('./courseRoutes')

const coursesControlls=require('../controllers/coursesController')

const { protect } = require('../middleware/CorpTraineeAuthMiddleware')
const router = express.Router()

router.post('/loginCorpTrainee',loginCorpTrainee);

router.post('/forgetpassword',sendEmailcrop)
router.post('/sendCertificateEmail',sendCertificateEmail)


router.put('/changepassword',changepassword);
router.get('/viewregistered',controlls.viewAll);
router.delete('/delete',controlls.del);
router.use(protect)


router.get('/alltrainees',controlls.getAllcrpTrainee);
router.post('/addtrainee',controlls.setcrpTrainee);
router.get('/getOneTrainee/:id',controlls.getOnecrpTrainee);
router.delete('/deletetrainee',controlls.deletecrpTrainee);
router.put('/updatecorptrainee/:id',controlls.updatecrptrainee);


router.put('/rateCourse',coursesControlls.rating)
router.post('/registercourse',controlls.registercourse)
router.get('/getregistercourses',controlls.getregistercourses)
router.put('/rateinstructor',controlls.rating)

router.get('/me',protect, controlls.getMe);
router.post('/reviewinst',controlls.reviewinst)

module.exports=router;