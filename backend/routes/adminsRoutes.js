
const express = require('express')
const router = express.Router()
const controlls = require('../controllers/adminsController.js')
const { protect } = require('../middleware/AdminAuthMiddleware.js')


router.get('/getAdmins',controlls.getAdmins);
router.get('/getAdmin',controlls.getAdmin);
router.post('/',controlls.setAdmin);
router.put('/',controlls.updateAdmin);
router.delete('/',controlls.deleteAdmin);
router.post('/createAdmin',controlls.createAdmin);
router.post('/registerCorpTrainee',controlls.registerCorpTrainee);
router.post('/registerInstructor',controlls.registerInstructor);
router.post('/RegisterAdmin',controlls.RegisterAdmin);
router.post('/loginAdmin',controlls.loginAdmin);
router.get('/me',protect, controlls.getMe);








module.exports = router