const asyncHandler = require('express-async-handler')

const Answers = require('../models/answersModel');




const getAnswers = asyncHandler(async (req, res) => {

    const allAnswers = await Answers.find()
    res.status(200).json(allAnswers)
})



    const getAnswer=async(req,res)=>{

        try{
        const {Trainee_id} = req.headers.user
          
          const Answer = await Answers.findById(Trainee_id)
          console.log(Trainee_id)
      
        
          res.status(200).json(Answer)
        }
        catch(error){
          res.status(400).json({error:error.message})
        
        }
      }

     
        
        
      






      
      const generateToken = (_id) => {
        return jwt.sign({ _id }, process.env.JWT_SECRET, {
          expiresIn: '30d',
        })
      } 






    module.exports = {

        getAnswers,
        getAnswer
      
        
        

    }
