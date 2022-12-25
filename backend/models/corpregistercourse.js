const mongoose = require('mongoose')

const registercourse=new mongoose.Schema({

    course_id:{type:String ,required:true},
    trainee_id:{type:String ,required:true},
    trainee_name:{type:String,required:true},
    course_name:{type:String,required:true},
    flag:{type:Boolean,required:true},
    appeal:{type:String,required:true}
})


const corp_trainee_reg_course=mongoose.model('traineeregcourse',registercourse)
module.exports=corp_trainee_reg_course