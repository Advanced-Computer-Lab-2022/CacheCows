const express = require('express')
const router = express.Router()
const controlls=require('../controllers/corporateTraineeController')
const { route } = require('./courseRoutes')

router.get('/alltrainees',controlls.getAllcrpTrainee);
router.post('/addtrainee',controlls.setcrpTrainee);
router.get('/getOneTrainee',controlls.getOnecrpTrainee);
router.delete('/deletetrainee/:id',controlls.deletecrpTrainee);
router.put('/updatecorptrainee/:id',controlls.updatecrptrainee);

module.exports=router;