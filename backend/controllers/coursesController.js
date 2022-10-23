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
    
    const course = await courses.find({course_name: req.body.course_name})
    if (course.toString() === ""){
        res.status(400)
        throw new Error ('course not found')
    }
     res.status(200).json({course})
     
    })

// @desc Set courses
// @routes POST /api/courses
// @access Private 
const setCourse = asyncHandler(async(req, res) => {
    if (!req.body.course_name){
        res.status(400)
        throw new Error('Please add a text field')
    }

    const course = await courses.create({
        course_name: req.body.course_name,
    })
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
     res.status(200).json({course})
     
    })

    // @desc Preview courses
// @routes GET /api/courses
// @access Private 
const previewCourses = asyncHandler(async (req, res) => {

    const course = await courses.findById(req.params.id)
    if (!course){
        res.status(400)
        throw new Error ('courses not found')
    }
    
     res.status(200).json({preview : req.params.preview })

    })


    const filterCourses = asyncHandler(async (req, res) => {

        const course = await courses.findById
        if (!course){
            res.status(400)
            throw new Error ('courses not found')
        }
        
         res.status(200).json({preview : req.params.preview })
    
        })





module.exports = {
    getCourses,
    setCourse,
    updateCourse,
    deleteCourse,
    previewCourses,
}
