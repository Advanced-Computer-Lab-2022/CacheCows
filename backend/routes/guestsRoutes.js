const express = require('express')
const router = express.Router()
const { getGuests, setGuest, updateGuest, deleteGuest, getGuest } = require('../controllers/guestsController.js')

router.route('/').get(getGuests).post(setGuest).get(getGuest)
router.route('/').delete(deleteGuest).put(updateGuest)


module.exports = router  