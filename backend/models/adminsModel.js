const mongoose = require('mongoose')
const { float } = require('webidl-conversions')
const { serializeInteger } = require('whatwg-url')

const AdminSchema = new mongoose.Schema({

     
     admin_name:{type: String, required: [true, 'Please add a text value'],timestamps : true},
     admin_user:{type: String, required: [true, 'Please add a text value'],timestamps : true},
     admin_pass:{type: String, required: [true, 'Please add a text value'],timestamps : true},
     //admin_id:{type: Number, required: [true, 'Please add a text value'],timestamps : true},
     admin_email : {type: String , required : [true, 'Please add a text value'], unique : true},
     country : {type: String , required : [true, 'Please add a text value']},
     admin_bd : {type: String , required : [true, 'Please add a text value']}
     
     

})

const adminmodel = mongoose.model("Admins",AdminSchema )
module.exports=adminmodel


     