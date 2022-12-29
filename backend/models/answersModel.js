const mongoose = require('mongoose')
const { float } = require('webidl-conversions')
const { serializeInteger } = require('whatwg-url')

const AnswersSchema = new mongoose.Schema({
     
     exam_id : {type: String , required: [true, 'EXAM ID MISSING'] },
     user_id : {type: String , required: [true, 'USER ID MISSING'] },
     course_id : {type: String , required: [true, 'COURSE ID MISSING'] },

     exam_q1_answer : {type: String , required: [true, 'Q1 ANSWER MISSING'] },
     exam_q1_grade : {type: String},

     exam_q2_answer : {type: String , required: [true, 'Q2 ANSWER MISSING'] },
     exam_q2_grade : {type: String},

     exam_q3_answer : {type: String , required: [true, 'Q3 ANSWER MISSING'] },
     exam_q3_grade : {type: String},

     exam_q4_answer : {type: String , required: [true, 'Q4 ANSWER MISSING'] },
     exam_q4_grade : {type: String },
     
} 
, {timestamps: true }
)

const Answers = mongoose.model("Answers",AnswersSchema )
module.exports=Answers