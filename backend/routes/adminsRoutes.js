const express = require('express')
const router = express.Router()
const { getAdmins, setAdmin, updateAdmin, deleteAdmin } = require('../controllers/adminsController.js')

router.route('/').get(getAdmins).post(setAdmin)
router.route('/').delete(deleteAdmin).put(updateAdmin)


module.exports = router  