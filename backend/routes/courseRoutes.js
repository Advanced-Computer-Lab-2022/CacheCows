const express = require('express')
const router = express.Router()
const controlls=require('../controllers/coursesController')
const upload = require('../middleware/upload.js')


router.get('/getCourses',controlls.getCourses);
router.get('/getCourse',controlls.getCourse);
router.get('/setCourse',controlls.setCourse);
router.get('/updateCourse',controlls.updateCourse);
router.get('/deleteCourse',controlls.deleteCourse);
router.get('/previewCourses',controlls.previewCourses);
router.get('/SearchCourseInstructor',controlls.SearchCourseInstructor);
router.get('/SearchCourseTitle',controlls.SearchCourseTitle);
router.get('/SearchCourseSubject',controlls.SearchCourseSubject);
router.get('/findInstCourse',controlls.findInstCourse);
router.get('/filterCoursesPrice',controlls.filterCoursesPrice);
router.get('/filterCoursesSubject',controlls.filterCoursesSubject);



module.exports = router  