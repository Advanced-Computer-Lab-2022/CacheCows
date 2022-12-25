
const express = require('express')
const controlls = require('../controllers/adminsController.js')
const { protect } = require('../middleware/AdminAuthMiddleware.js')
const router = express.Router()



router.post('/registerCorpTrainee',controlls.registerCorpTrainee);
router.post('/registerInstructor',controlls.registerInstructor);
router.post('/RegisterAdmin',controlls.RegisterAdmin);
router.post('/loginAdmin',controlls.loginAdmin);

router.get('/getAdmins',controlls.getAdmins);
router.get('/getInstructors',controlls.getInstructors);
router.get('/getAllcrpTrainee',controlls.getAllcrpTrainee);

// require auth for all workout routes
router.use(protect)




router.get('/getAdmin',controlls.getAdmin);
router.post('/',controlls.setAdmin);
router.put('/',controlls.updateAdmin);
router.delete('/deleteAdmin',controlls.deleteAdmin);
router.post('/createAdmin',controlls.createAdmin);
router.get('/viewrequests',controlls.viewrequests);
router.put('/acceptrequest',controlls.acceptrequest);

router.get('/me',protect, controlls.getMe);








module.exports = router