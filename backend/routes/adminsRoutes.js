
const express = require('express')
const controlls = require('../controllers/adminsController.js')
const { protect } = require('../middleware/AdminAuthMiddleware.js')
const router = express.Router()



router.post('/registerCorpTrainee',controlls.registerCorpTrainee);
router.post('/registerInstructor',controlls.registerInstructor);
router.post('/RegisterAdmin',controlls.RegisterAdmin);
router.post('/loginAdmin',controlls.loginAdmin);

// require auth for all workout routes
//router.use(protect)

router.get('/getAdmins',controlls.getAdmins);
router.get('/getAdmin',controlls.getAdmin);
router.post('/',controlls.setAdmin);
router.put('/',controlls.updateAdmin);
router.delete('/',controlls.deleteAdmin);
router.post('/createAdmin',controlls.createAdmin);

router.get('/me',protect, controlls.getMe);








module.exports = router