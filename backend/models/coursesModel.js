const mongoose = require('mongoose')
const { float } = require('webidl-conversions')
const { serializeInteger } = require('whatwg-url')

const CoursesSchema = new mongoose.Schema({

     course_id :{type: String, required: [true, 'Please add a text value'],timestamps : true},
     course_name :{type: String, required: [true, 'Please add a text value'],timestamps : true },
     instructor_name:{type: String, required: [true, 'Please add a text value'],timestamps : true},
     instructor_id:{type: String, required: [true, 'Please add a text value'],timestamps : true},
     course_rating:{type: Number, required: [true, 'Please add a text value'],timestamps : true},
     course_discount:{type: Number, required: flase,timestamps : true},
     course_price:{type: Number, required: [true, 'Please add a text value']},timestamps : true,
     course_summary:{type: String,timestamps : true},
     course_total_hours:{type: Number, required: [true, 'Please add a text value']},timestamps : true,
     course_subject:{type: String,timestamps : true},
     course_exercise:{type: String, timestamps : true},
     course_outline:{type: String,timestamps : true},
     course_video:{type: String,timestamps : true},
     course_preview:{type: String,timestamps : true}

})

const coursesModel = mongoose.model("courses",CoursesSchema )
module.exports=coursesModel