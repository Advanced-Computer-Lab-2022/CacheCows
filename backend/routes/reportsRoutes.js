const express = require('express')
const router = express.Router()
const controlls = require('../controllers/reportsController.js')

router.get('/getReports',controlls.getReports);
router.post('/getReport',controlls.getReport);
router.post('/getCReport',controlls.getCReport);
router.post('/setReport',controlls.setReport);
router.put('/updateReport',controlls.updateReport);
router.delete('/deleteReport',controlls.deleteReport);


module.exports = router  