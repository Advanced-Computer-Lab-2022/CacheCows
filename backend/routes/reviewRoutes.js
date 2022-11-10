const express = require('express')
const router = express.Router()
const controlls = require('../controllers/reviewsController.js')

router.get('/getIReviews',controlls.getIReviews);
router.get('/getIReview',controlls.getIReview);
router.post('/',controlls.setIReview);
router.put('/',controlls.updateIReview);
router.delete('/',controlls.deleteIReview);


module.exports = router  