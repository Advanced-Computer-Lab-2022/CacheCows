const express = require('express')
const router = express.Router()
const controlls = require('../controllers/reportsController.js')

router.get('/getReports',controlls.getReports);
router.post('/getReport',controlls.getReport);
router.post('/get1Report',controlls.get1Report);
router.post('/getCReport',controlls.getCReport);
router.post('/setReport',controlls.setReport);
router.put('/updateReport',controlls.updateReport);
router.delete('/deleteReport',controlls.deleteReport);
router.post('/addComment',controlls.AddComment);
router.post('/getComments',controlls.getComments);


module.exports = router  