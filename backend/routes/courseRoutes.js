const express = require('express')
const router = express.Router()
const { getCourses, setCourse, updateCourse, deleteCourse } = require('../controllers/coursesController.js')
const route = require('../middlleware/upload.js')

router.route('/').get(getCourses).post(setCourse)
router.route('/').delete(deleteCourse).put(updateCourse)


module.exports = router  