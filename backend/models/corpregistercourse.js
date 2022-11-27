const mongoose = require('mongoose')

const registercourse=new mongoose.Schema({

    course_id:{type:String ,required:true},
    trainee_id:{type:String ,required:true}
})


const corp_trainee_reg_course=mongoose.model('traineeregcourse',registercourse)
module.exports=corp_trainee_reg_course