const express = require('express')
const router = express.Router()
const { getInstructors, setInstructor, updateInstructor, deleteInstructor, getInstructor } = require('../controllers/instructorsController.js')

router.route('/').get(getInstructors).post(setInstructor).get(getInstructor)
router.route('/').delete(deleteInstructor).put(updateInstructor)


module.exports = router  