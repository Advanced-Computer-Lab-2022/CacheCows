const express = require('express')
const router = express.Router()
const controlls=require('../controllers/corporateTraineeController')
const { route } = require('./courseRoutes')
const { protect } = require('../middleware/CorpTraineeAuthMiddleware')


router.get('/alltrainees',controlls.getAllcrpTrainee);
router.post('/addtrainee',controlls.setcrpTrainee);
router.get('/getOneTrainee/:id',controlls.getOnecrpTrainee);
router.delete('/deletetrainee/:id',controlls.deletecrpTrainee);
router.put('/updatecorptrainee/:id',controlls.updatecrptrainee);
router.post('/loginCorpTrainee',controlls.loginCorpTrainee);
router.get('/me',protect, controlls.getMe);


module.exports=router;