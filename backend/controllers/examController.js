const asyncHandler = require('express-async-handler')

const exams = require('../models/examsModel');




const getExams = asyncHandler(async (req, res) => {

    const allExams = await exams.find()
    res.status(200).json(allExams)
})


    const getExam=async(req,res)=>{

        try{
        const {Trainee_id} = req.headers.user
          
          const exam = await exams.findById(Trainee_id)
        
      
        
          res.status(200).json(exam)
        }
        catch(error){
          res.status(400).json({error:error.message})
        
        }
      }


    module.exports = {

        getExams,
        getExam,
        

    }
