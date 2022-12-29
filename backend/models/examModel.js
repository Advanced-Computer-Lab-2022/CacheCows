const mongoose = require('mongoose')
const { float } = require('webidl-conversions')
const { serializeInteger } = require('whatwg-url')

const ExamSchema = new mongoose.Schema({

     course_id : {type: String , required: [true, 'COURSE ID MISSING'] },

     exam_q1 : {type: String , required: [true, 'Q1 MISSING'] },
     exam_q1_answer1 : {type: String , required: [true, 'Q1 ANSWER MISSING'] },
     exam_q1_answer2 : {type: String , required: [true, 'Q1 ANSWER MISSING'] },
     exam_q1_answer3 : {type: String , required: [true, 'Q1 ANSWER MISSING'] },
     exam_q1_answer4 : {type: String , required: [true, 'Q1 ANSWER MISSING'] },
     exam_q1_right_answer : {type: String , required: [true, 'Q1 ANSWER MISSING'] },

     exam_q2 : {type: String , required: [true, 'Q2 MISSING'] },
     exam_q2_answer1 : {type: String , required: [true, 'Q2 ANSWER MISSING'] },
     exam_q2_answer2 : {type: String , required: [true, 'Q2 ANSWER MISSING'] },
     exam_q2_answer3 : {type: String , required: [true, 'Q2 ANSWER MISSING'] },
     exam_q2_answer4 : {type: String , required: [true, 'Q2 ANSWER MISSING'] },
     exam_q2_right_answer : {type: String , required: [true, 'Q2 ANSWER MISSING'] },

     exam_q3 : {type: String , required: [true, 'Q3 MISSING'] },
     exam_q3_answer1 : {type: String , required: [true, 'Q3 ANSWER MISSING'] },
     exam_q3_answer2 : {type: String , required: [true, 'Q3 ANSWER MISSING'] },
     exam_q3_answer3 : {type: String , required: [true, 'Q3 ANSWER MISSING'] },
     exam_q3_answer4 : {type: String , required: [true, 'Q3 ANSWER MISSING'] },
     exam_q3_right_answer : {type: String , required: [true, 'Q3 ANSWER MISSING'] },

     exam_q4 : {type: String , required: [true, 'Q4 MISSING'] },
     exam_q4_answer1 : {type: String , required: [true, 'Q4 ANSWER MISSING'] },
     exam_q4_answer2 : {type: String , required: [true, 'Q4 ANSWER MISSING'] },
     exam_q4_answer3 : {type: String , required: [true, 'Q4 ANSWER MISSING'] },
     exam_q4_answer4 : {type: String , required: [true, 'Q4 ANSWER MISSING'] },
     exam_q4_right_answer : {type: String , required: [true, 'Q4 ANSWER MISSING'] },
     
} 
, {timestamps: true }
)

const Exams = mongoose.model("Exams",ExamSchema )
module.exports=Exams