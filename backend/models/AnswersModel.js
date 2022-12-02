const mongoose = require('mongoose')


const AnswersSchema = new mongoose.Schema({

     course_id:{type:Number, },
     exam_id:{type: Number, },
     Trainee_id :{type: Number,   },
     Answer1 :{type: String,       },
     Answer2 :{type: String,       },
     Answer3 :{type: String,       },
     Answer4 :{type: String,       },
    
    
     
} 
, {timestamps: true }
)

const Answers = mongoose.model("Answers",AnswersSchema )
module.exports= Answers