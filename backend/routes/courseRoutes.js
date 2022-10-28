const express = require('express')
const router = express.Router()
const controlls=require('../controllers/coursesController')
const upload = require('../middleware/upload.js')


router.get('/getCourses',controlls.getCourses);
router.get('/getCourse',controlls.getCourse);
router.post('/',upload.single('course_preview'),controlls.setCourse);
router.put('/',controlls.updateCourse);
router.delete('/',controlls.deleteCourse);
router.get('/previewCourses',controlls.previewCourses);
router.get('/SearchCourseByOpt',controlls.SearchCourseByOpt);
router.get('/SearchInstCourseTitle',controlls.SearchInstCourseTitle);
router.get('/SearchInstCourseSubject',controlls.SearchInstCourseSubject);
router.get('/SearchCourseInstructor',controlls.SearchCourseInstructor);
router.get('/findInstCourse',controlls.findInstCourse);
router.get('/filterCourseByPrice',controlls.filterCourseByPrice);
router.get('/filterCourseBySubjectOrRating',controlls.filterCourseBySubjectOrRating);
router.get('/viewCoursePrice',controlls.viewCoursePrice);
router.get('/viewCourses',controlls.viewCourses);
router.get('/filterInstCourse',controlls.filterInstCourse);
router.get('/CourseData',controlls.CourseData);



module.exports = router