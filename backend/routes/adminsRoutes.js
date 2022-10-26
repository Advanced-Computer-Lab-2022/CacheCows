const express = require('express')
const router = express.Router()
const { getAdmins, setAdmin, updateAdmin, deleteAdmin } = require('../controllers/adminsController.js')

router.route('/').get(getAdmins)
router.route('/').post(setAdmin)
router.route('/').delete(deleteAdmin)
router.route('/').put(updateAdmin)


module.exports = router  