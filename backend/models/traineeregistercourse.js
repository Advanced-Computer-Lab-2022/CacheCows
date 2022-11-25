const mongoose = require('mongoose')

const registercourse=new mongoose.Schema({

    course_id:{type:String ,required:true},
    trainee_id:{type:String ,required:true}
})


const trainee_reg_course=mongoose.model('traineeregcourse',registercourse)
module.exports=trainee_reg_course