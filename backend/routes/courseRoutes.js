const express = require('express')
const router = express.Router()
const controlls=require('../controllers/coursesController')
const upload = require('../middleware/upload.js')


router.get('/getCourses',controlls.getCourses);
router.post('/getCourse',controlls.getCourse);
router.post('/',controlls.setCourse);
router.put('/update',controlls.updateCourse);
router.delete('/',controlls.deleteCourse);
router.post('/previewCourses',controlls.previewCourses);
router.post('/SearchCourseByOpt',controlls.SearchCourseByOpt);
router.post('/SearchCourseByOptInst',controlls.SearchCourseByOptInst);
router.post('/SearchInstCourseTitle',controlls.SearchInstCourseTitle);
router.post('/SearchInstCourseSubject',controlls.SearchInstCourseSubject);
router.post('/SearchCourseInstructor',controlls.SearchCourseInstructor);
router.post('/findInstCourse',controlls.findInstCourse);
router.post('/filterCourseByPrice',controlls.filterCourseByPrice);
router.post('/filterCourseBySubjectOrRating',controlls.filterCourseBySubjectOrRating);
router.post('/filterCourseBySubjectOrRatingInst',controlls.filterCourseBySubjectOrRatingInst);
router.post('/viewCoursePrice',controlls.viewCoursePrice);
router.post('/viewCourses',controlls.viewCourses);
router.post('/filterInstCourse',controlls.filterInstCourse);
router.post('/CourseData',controlls.CourseData);
router.post('/getInstCourses',controlls.getInstCourses);
router.post('/getCRate',controlls.getCRate);
router.get('/getCHype',controlls.getCourseHype);





module.exports = router