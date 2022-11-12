const express = require('express')
const router = express.Router()
const controlls = require('../controllers/reviewsController.js')

router.get('/getIReviews',controlls.getIReviews);
router.get('/getIReview',controlls.getIReview);
router.post('/addIReview',controlls.setIReview);
router.put('/updateIReview',controlls.updateIReview);
router.delete('/deleteIReview',controlls.deleteIReview);

router.get('/getCReviews',controlls.getCReviews);
router.get('/getCReview',controlls.getCReview);
router.post('/addCReview',controlls.setCReview);
router.put('/updateCReview',controlls.updateCReview);
router.delete('/deleteCReview',controlls.deleteCReview);


module.exports = router  