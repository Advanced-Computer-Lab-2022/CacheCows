const asyncHandler = require('express-async-handler')

const instructors = require('../models/InstructorsModel')
const course=require('../models/coursesModel');
// @desc Get Instructors
// @routes GET /api/Instructors
// @access Private 
const getInstructors = asyncHandler(async (req, res) => {

    const allInstructors = await instructors.find()
    res.status(200).json(allInstructors)
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
    if (!req.body.instructor_name){
        res.status(400)
        throw new Error('Please add a text field')
    }

    const Instructor = await instructors.create({
        instructor_name : req.body.instructor_name,
        instructor_id : req.body.instructor_id,
        instructor_email : req.body.instructor_email,
        country : req.body.country,
        instructor_bd : req.body.instructor_bd
    })
    res.status(200).json(Instructor)
})

// @desc Update Instructors
// @routes PUT /api/Instructors
// @access Private 
const updateInstructor = asyncHandler(async (req, res) => {
    
    const Instructor = await instructors.find({_id: req.body._id})
    
    if (Instructor.toString() === ""){
        res.status(400)
        throw new Error ('Instructor not found')
    }
    const updatedInstructor = await instructors.findByIdAndUpdate({_id: req.body._id}, req.body ,{
        new : true,
    })
    res.status(200).json(updatedInstructor)
})
// @desc DELTE Instructors
// @routes DELETE /api/Instructors
// @access Private 
const deleteInstructor =  asyncHandler(async (req, res) => {
    
    const Instructor = await instructors.find({Instructor_name: req.body.Instructor_name})
    if (Instructor.toString() === ""){
        res.status(400)
        throw new Error ('Instructor not found')
    }
     await instructors.deleteOne({Instructor_name: req.body.Instructor_name})
     res.status(200).json({Instructor})
     
    })

// instructor creating a new course 
const createCourse=async (req,res)=>
{
 try{
 const inst=await instructors.findById(req.params.id)}
 catch(error){
     res.status(400).json({error:error.message})
 }

 const course_name=req.body.course_name;
 const instructor_name=inst.instructor_name;
 const instructor_id=req.params.id;
 const course_price=req.body.course_price;
 const course_summary=req.body.course_summary;
 const course_subtitles=req.body.course_subtitle;

try{
 course.create({course_name,instructor_name,instructor_id,course_price,course_summary,course_subtitles})
 res.status(200).json("course created!")
}
catch(error){
 res.status(400).json({error:error.message})
}
}

module.exports = {
    getInstructors,
    setInstructor,
    updateInstructor,
    deleteInstructor,
    getInstructor,
    createCourse
}

