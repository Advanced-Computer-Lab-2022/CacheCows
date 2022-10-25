const express = require('express')
const router = express.Router()
const controlls=require('../controllers/individualTraineeController')
const { route } = require('./courseRoutes')

router.get('/allindvtrainees',controlls.getAllinvdTrainee);
router.post('/addindvtrainee',controlls.setindvTrainee);
router.get('/getOneindvTrainee',controlls.getOneindvTrainee);
router.delete('/deleteindvTrainee/:id',controlls.deleteindvTrainee);
router.put('/updateindvtrainee/:id',controlls.updateindvtrainee);


module.exports=router;