const express = require('express')
const router = express.Router()
const { getcourses, setcourse, updatecourse, deletecourse } = require('../controllers/coursesController')

router.route('/').get(getcourses).post(setcourse)
router.route('/:id').delete(deletecourse).put(updatecourse)



module.exports = router  