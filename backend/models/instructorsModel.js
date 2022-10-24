const mongoose = require('mongoose')
const { float } = require('webidl-conversions')
const { serializeInteger } = require('whatwg-url')

const InstructorSchema = new mongoose.Schema({

     
     instructor_name:{type: String, required: [true, 'Please add a text value'],timestamps : true},
     instructor_id:{type: String, required: [true, 'Please add a text value'],timestamps : true},
     instructor_email:{type: String, required: [true, 'Please add a text value'],timestamps : true},
     instructor_bd:{type: Date, required: [true, 'Please add a text value'],timestamps : true},
     country : {type: String , required : [true, 'Please add a text value']},
     

})

const instructormodel = mongoose.model("instructors",InstructorSchema )
module.exports=instructormodel