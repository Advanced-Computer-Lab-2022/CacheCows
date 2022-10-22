const asyncHandler = require('express-async-handler')

const courses = require('../models/coursesModel')

// @desc Get courses
// @routes GET /api/courses
// @access Private 
const getCourses = asyncHandler(async (req, res) => {

    const courses = await courses.find()
    res.status(200).json(courses)
})

// @desc Set courses
// @routes POST /api/courses
// @access Private 
const setCourse = asyncHandler(async(req, res) => {
    if (!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }

    const course = await courses.create({
        text: req.body.text,
    })
    res.status(200).json(course)
})

// @desc Update courses
// @routes PUT /api/courses
// @access Private 
const updateCourse = asyncHandler(async (req, res) => {
    
    const course = await courses.findById(req.params.id)
    
    if (!course){
        res.status(400)
        throw new Error ('course not found')
    }
    const updatedcourse = await courses.findByIdAndUpdate(req.params.id, req.body ,{
        new : true,
    })
    res.status(200).json(updatedcourse)
})
// @desc DELTE courses
// @routes DELETE /api/courses
// @access Private 
const deleteCourse =  asyncHandler(async (req, res) => {
    
    const course = await courses.findById(req.params.id)
    if (!course){
        res.status(400)
        throw new Error ('courses not found')
    }
     await courses.remove()
     res.status(200).json({id : req.params.id })

    })




module.exports = {
    getCourses,
    setCourse,
    updateCourse,
    deleteCourse,
}
