const express = require('express')
const router = express.Router()
const controlls = require('../controllers/adminsController.js')

router.get('/getAdmins',controlls.getAdmins);
router.get('/getAdmin',controlls.getAdmin);
router.post('/',controlls.setAdmin);
router.put('/',controlls.updateAdmin);
router.delete('/',controlls.deleteAdmin);
router.delete('/createAdmin',controlls.createAdmin);
router.delete('/createInstructor',controlls.createInstructor);
router.delete('/createCorpTrainee',controlls.createCorpTrainee);


module.exports = router  
