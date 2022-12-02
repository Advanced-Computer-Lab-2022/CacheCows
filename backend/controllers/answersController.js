const asyncHandler = require('express-async-handler')

const Answers = require('../models/AnswersModel');




const getAnswers = asyncHandler(async (req, res) => {

    const allAnswers = await Answers.find()
    res.status(200).json(allAnswers)
})



    const getAnswer=async(req,res)=>{

        try{
        const {indiv_id} = req.headers.user
          
          const Answer = await Answers.findById(indiv_id)
          console.log(indiv_id)
      
        
          res.status(200).json(Answer)
        }
        catch(error){
          res.status(400).json({error:error.message})
        
        }
      }







    module.exports = {

        getAnswers,
        getAnswer
        

    }
