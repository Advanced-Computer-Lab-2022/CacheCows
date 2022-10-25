const express = require('express')
const router = express.Router()
const controlls = require('../controllers/guestsController.js')

router.get('/getGuests',controlls.getGuests);
router.get('/getGuest',controlls.getGuest);
router.post('/',controlls.setGuest);
router.put('/',controlls.updateGuest);
router.delete('/',controlls.deleteGuest);


module.exports = router  