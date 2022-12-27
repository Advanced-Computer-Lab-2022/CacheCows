const asyncHandler = require('express-async-handler')

const exams = require('../models/examModel');
const answers = require('../models/answersModel');




const getExams = asyncHandler(async (req, res) => {

    const allExams = await exams.find()
    res.status(200).json(allExams)
})

const getCourseExams = asyncHandler(async (req, res) => {
    try{
    const exam = await exams.find({course_id : req.body.course_id})
    res.status(200).json(exam)
    }catch(error){
        res.status(400).json({error:error.message})
    }
})

const setExam = asyncHandler(async (req, res) => {

    try{

    const exam = await exams.create({
        course_id : req.body.course_id,
   
        exam_q1 : req.body.exam_q1,
        exam_q1_answer1 : req.body.exam_q1_answer1,
        exam_q1_answer2 : req.body.exam_q1_answer2,
        exam_q1_answer3 : req.body.exam_q1_answer3,
        exam_q1_answer4 : req.body.exam_q1_answer4,
        exam_q1_right_answer : req.body.exam_q1_right_answer,

        exam_q2 : req.body.exam_q2,
        exam_q2_answer1 : req.body.exam_q2_answer1,
        exam_q2_answer2 : req.body.exam_q2_answer2,
        exam_q2_answer3 : req.body.exam_q2_answer3,
        exam_q2_answer4 : req.body.exam_q2_answer4,
        exam_q2_right_answer : req.body.exam_q2_right_answer,

        exam_q3 : req.body.exam_q3,
        exam_q3_answer1 : req.body.exam_q3_answer1,
        exam_q3_answer2 : req.body.exam_q3_answer2,
        exam_q3_answer3 : req.body.exam_q3_answer3,
        exam_q3_answer4 : req.body.exam_q3_answer4,
        exam_q3_right_answer : req.body.exam_q3_right_answer,
   
        exam_q4 : req.body.exam_q4,
        exam_q4_answer1 : req.body.exam_q4_answer1,
        exam_q4_answer2 : req.body.exam_q4_answer2,
        exam_q4_answer3 : req.body.exam_q4_answer3,
        exam_q4_answer4 : req.body.exam_q4_answer4,
        exam_q4_right_answer : req.body.exam_q4_right_answer,
    })
    res.status(200).json(exam)
}catch(error){
    res.status(400).json({error:error.message})
}
})

const setGrade = asyncHandler(async (req, res) => {
    const g1 = 0;
    const g2 = 0;
    const g3 = 0;
    const g4 = 0;


    try{
        const exam = exams.findById(req.body.exam_id)
        if(req.body.exam_q1_answer1 == exam.exam_q1_right_answer ){
             g1 = 1
        }
        if(req.body.exam_q2_answer2 == exam.exam_q2_right_answer ){
             g2 = 1    
        }
        if(req.body.exam_q3_answer3 == exam.exam_q3_right_answer ){
             g3 = 1
        }
        if(req.body.exam_q4_answer4 == exam.exam_q4_right_answer ){
             g4 = 1
        }


        const answer = await answers.creat({
        exam_id : req.body.exam_id,
        user_id : req.body.user_id,
        course_id : req.body.course_id,

        exam_q1_grade : g1,
        exam_q2_grade : g2,
        exam_q3_grade : g3, 
        exam_q4_grade : g4
    })
    res.status(200).json(answer)
}catch(error){
    res.status(400).json({error:error.message})
}
})



const getuserexam = asyncHandler(async (req, res) => {

    const exam = await answers.find({user_id,course_id})
    res.status(200).json(exam)
})   
     
    module.exports = {

        getExams,
        getCourseExams,
        getuserexam,
        setExam,
        setGrade
    }
