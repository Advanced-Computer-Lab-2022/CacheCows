const mongoose = require('mongoose')

const registercourse=new mongoose.Schema({

    course_id:{type:String ,required:true},
    trainee_id:{type:String ,required:true},
    trainee_name:{type:String,required:true},
    course_name:{type:String,required:true},
    flag:{type:Boolean,required:true},
    appeal:{type:String,required:true},
    course_progress:{type:Number ,required:false},
    course_progress_percentage:{type:Number ,required:false}
})


const corp_trainee_reg_course=mongoose.model('traineeregcourse',registercourse)
module.exports=corp_trainee_reg_course