const mongoose = require('mongoose')
const { float } = require('webidl-conversions')
const { serializeInteger } = require('whatwg-url')

const InstructorSchema = new mongoose.Schema({

     
     instructor_name:{type: String, required: [true, 'Please add a text value'],timestamps : true},
     instructor_user:{type: String, required: [false, 'Please add a text value'],timestamps : true, unique : true},
     instructor_pass:{type: String, required: [false, 'Please add a text value'],timestamps : true},
     instructor_id:{type: String, required: [false, 'Please add a text value'],timestamps : true},
     instructor_email:{type: String, required: [true, 'Please add a text value'],timestamps : true ,unique : true,}, 
     instructor_bd:{type: String, required: [true, 'Please add a text value'],timestamps : true},
     country : {type: String , required : [false, 'Please add a text value']},
     instructor_rate : {type: Number , required : [false, 'Please add a text value']},
     instructor_total_rate:{type:Number,required :false},
     instructor_total_no_rate:{type:Number,required:false},
     acceptTerms:{type: String,required:false},
     type : {type: String , required : false},
     instructor_biography:{type: String,}, 
     owed:{type:Number}


     

})

const instructormodel = mongoose.model("instructors",InstructorSchema )
module.exports=instructormodel