const asyncHandler = require('express-async-handler')

const instructors = require('../models/InstructorsModel')

// @desc Get Instructors
// @routes GET /api/Instructors
// @access Private 
const getInstructors = asyncHandler(async (req, res) => {

    const allInstructors = await Instructors.find()
    res.status(200).json(allinstructors)
})

const getInstructor =  asyncHandler(async (req, res) => {
    
    const Instructor = await instructors.find({Instructor_name: req.body.Instructor_name})
    if (Instructor.toString() === ""){
        res.status(400)
        throw new Error ('Instructor not found')
    }
     res.status(200).json({Instructor})
     
    })

// @desc Set Instructors
// @routes POST /api/Instructors
// @access Private 
const setInstructor = asyncHandler(async(req, res) => {
    if (!req.body.Instructor_name){
        res.status(400)
        throw new Error('Please add a text field')
    }

    const Instructor = await instructors.create({
        Instructor_name: req.body.Instructor_name,
    })
    res.status(200).json(Instructor)
})

// @desc Update Instructors
// @routes PUT /api/Instructors
// @access Private 
const updateInstructor = asyncHandler(async (req, res) => {
    
    const Instructor = await Instructors.find({_id: req.body._id})
    
    if (Instructor.toString() === ""){
        res.status(400)
        throw new Error ('Instructor not found')
    }
    const updatedInstructor = await Instructors.findByIdAndUpdate({_id: req.body._id}, req.body ,{
        new : true,
    })
    res.status(200).json(updatedInstructor)
})
// @desc DELTE Instructors
// @routes DELETE /api/Instructors
// @access Private 
const deleteInstructor =  asyncHandler(async (req, res) => {
    
    const Instructor = await Instructors.find({Instructor_name: req.body.Instructor_name})
    if (Instructor.toString() === ""){
        res.status(400)
        throw new Error ('Instructor not found')
    }
     await Instructors.deleteOne({Instructor_name: req.body.Instructor_name})
     res.status(200).json({Instructor})
     
    })







module.exports = {
    getInstructors,
    setInstructor,
    updateInstructor,
    deleteInstructor,
    getInstructor,
}
