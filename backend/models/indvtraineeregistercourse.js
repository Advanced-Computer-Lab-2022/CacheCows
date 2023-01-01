const mongoose = require('mongoose')

const registercourse=new mongoose.Schema({

    course_id:{type:String ,required:true},
    trainee_id:{type:String ,required:true},
    course_progress:{type:Number ,required:true},
    course_progress_percentage:{type:Number ,required:true}
})


const trainee_reg_course=mongoose.model('indvtraineeregcourse',registercourse)
module.exports=trainee_reg_course