const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const examsSchema= new mongoose.Schema(
    {
        Trainee_id:{
            type:String,
            required:true,
        },
        

        exam_Name:{
            type:String,
            required:true,
        },
      
        exam_Ques1:{
            type:String,
            required:true,
        },
        exam_Ques2:{
            type:String,
            required:true,
        },
        exam_Ques3:{
            type:String,
            required:true,
        },
        exam_Ques4:{
            type:String,
            required:true,
        },
        exam_Ques1Answer1:{

            type:String,
            required:true,
        },
        exam_Ques1Answer2:{

            type:String,
            required:true,
        },
        exam_Ques1Answer3:{

            type:String,
            required:true,
        },
        exam_Ques1Answer4:{

            type:String,
            required:true,
        },
        exam_Ques2Answer1:{

            type:String,
            required:true,
        },
        
        exam_Ques2Answer2:{

            type:String,
            required:true,
        },
        exam_Ques2Answer3:{

            type:String,
            required:true,
        },
        exam_Ques2Answer4:{

            type:String,
            required:true,
        },
        exam_Ques3Answer1:{

            type:String,
            required:true,
        },
        
        exam_Ques3Answer2:{

            type:String,
            required:true,
        },
        exam_Ques3Answer3:{

            type:String,
            required:true,
        },
        exam_Ques3Answer4:{

            type:String,
            required:true,
        },
        exam_Ques4Answer1:{

            type:String,
            required:true,
        },
        
        exam_Ques4Answer2:{

            type:String,
            required:true,
        },
        exam_Ques4Answer3:{

            type:String,
            required:true,
        },
        exam_Ques4Answer4:{

            type:String,
            required:true,
        },

        exam_Ques1RightAnswer: {

            type:String,
            required:true,
        },


        exam_Ques2RightAnswer: {

            type:String,
            required:true,
        },
        exam_Ques3RightAnswer: {

            type:String,
            required:true,
        },
        exam_Ques4RightAnswer: {

            type:String,
            required:true,
        }
    }

)

const exams = mongoose.model('exams',examsSchema);
module.exports = exams;