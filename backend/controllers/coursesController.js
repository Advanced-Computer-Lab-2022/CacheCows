const asyncHandler = require('express-async-handler')

const courses = require('../models/coursesModel')

// @desc Get courses
// @routes GET /api/courses
// @access Private 
const getCourses = asyncHandler(async (req, res) => {

    const allcourses = await courses.find()
    res.status(200).json(allcourses)
})

const getCourse =  asyncHandler(async (req, res) => {
    
    const course = await courses.find({instructor_id: req.body.instructor_id})
    if (course.toString() === ""){
        res.status(400)
        throw new Error ('course not found')
    }
     res.status(200).json(course)
     
    })

// @desc Set courses
// @routes POST /api/courses
// @access Private 
const setCourse = asyncHandler(async(req, res) => {
    if (req.body.course_name === ""){
        res.status(400)
        throw new Error('Please add a text field')
    }

    const course = await courses.create({
     course_id :req.body.course_id,
     course_name :req.body.course_name,
     instructor_name:req.body.instructor_name,
     instructor_id:req.body.instructor_id,
     course_rating:req.body.course_rating,
     course_discount:req.body.course_discount,
     course_price:req.body.course_price,  
     course_summary:req.body.course_summary,
     course_total_hours:req.body.course_total_hours,  
     course_subject:req.body.course_subject,
     course_exercise:req.body.course_exercise,
     course_outline:req.body.course_outline,
     course_video:req.body.course_video,
     
    })
    if(req.file){
        course_preview= req.file.path
    }
    
    res.status(200).json(course)
})

// @desc Update courses
// @routes PUT /api/courses
// @access Private 
const updateCourse = asyncHandler(async (req, res) => {
    
    const course = await courses.find({_id: req.body._id})
    
    if (course.toString() === ""){
        res.status(400)
        throw new Error ('course not found')
    }
    const updatedcourse = await courses.findByIdAndUpdate({_id: req.body._id}, req.body ,{
        new : true,
    })
    res.status(200).json(updatedcourse)
})
// @desc DELTE courses
// @routes DELETE /api/courses
// @access Private 
const deleteCourse =  asyncHandler(async (req, res) => {
    
    const course = await courses.find({course_name: req.body.course_name})
    if (course.toString() === ""){
        res.status(400)
        throw new Error ('course not found')
    }
     await courses.deleteOne({course_name: req.body.course_name})
     res.status(200).json(course)
     
    })

    // @desc Preview courses
// @routes GET /api/courses
// @access Private 
const previewCourses = asyncHandler(async (req, res) => {

    const course = await courses.findById(req.params.course_id)
    if (!course){
        res.status(400)
        throw new Error ('course not found!')
    }
    
     res.status(200).json({preview : req.params.preview })

    })


    const filterCoursesSubject = asyncHandler(async (req, res) => {

        const course = await courses.findById({subject : req.body.course_subject})
        if (!course){
            res.status(400)
            throw new Error ('No Courses Matches Search!')
        }
        
         res.status(200).json(course)
    
        })

        const findInstCourse = asyncHandler(async(req,res)=> {

            const course = await courses.find({instructor_id: req.body.instructor_id})
            if (!course){
                res.status(400)
                throw new Error ('No Courses Uploaded Yet!')
            }
            
             res.status(200).json(course)
        
            })
          
            const filterCoursesPrice = asyncHandler(async (req, res) => {

                const course = await courses.findById({course_price : req.body.course_price})
                if (!course){
                    res.status(400)
                    throw new Error ('No Courses Matches Search!')
                }
                
                 res.status(200).json(course)
            
                })   
                
                const SearchCourseTitle = asyncHandler(async (req, res) => {

                    const course = await courses.find({course_name : req.body.course_name, instructor_id : req.body.instructor_id })
                    if (!course){
                        res.status(400)
                        throw new Error ('No Courses Matches Search!')
                    }
                     res.status(200).json(course)
                    })


                    const SearchCourseSubject = asyncHandler(async (req, res) => {

                        const course = await courses.find({course_subject : req.body.course_subject, instructor_id : req.body.instructor_id })
                        if (!course){
                            res.status(400)
                            throw new Error ('No Courses Matches Search!')
                        }
                         res.status(200).json(course)
                        })
                        
                        const SearchCourseInstructor = asyncHandler(async (req, res) => {

                            const course = await courses.find({instructor_name : req.body.instructor_name, instructor_id : req.body.instructor_id })
                            if (!course){
                                res.status(400)
                                throw new Error ('No Courses Matches Search!')
                            }
                             res.status(200).json(course)
                            })





module.exports = {
    getCourses,
    getCourse,
    setCourse,
    updateCourse,
    deleteCourse,
    previewCourses,
    SearchCourseInstructor,
    SearchCourseTitle,
    SearchCourseSubject,
    findInstCourse,
    filterCoursesPrice,
    filterCoursesSubject,

}
