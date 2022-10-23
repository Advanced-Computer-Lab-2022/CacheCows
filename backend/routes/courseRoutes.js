const express = require('express')
const router = express.Router()
const { getCourses, setCourse, updateCourse, deleteCourse } = require('../controllers/coursesController')

router.route('/').get(getCourses).post(setCourse)
router.route('/').delete(deleteCourse).put(updateCourse)


module.exports = router  