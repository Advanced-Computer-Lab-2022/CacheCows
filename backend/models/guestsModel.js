const mongoose = require('mongoose')
const { float } = require('webidl-conversions')
const { serializeInteger } = require('whatwg-url')

const guestSchema = new mongoose.Schema({

     
     guest_name:{type: String, required: [true, 'Please add a text value'],timestamps : true},
     country : {type: String , required : [true, 'Please add a text value']},
     

})

const guestmodel = mongoose.model("guests",guestSchema )
module.exports=guestmodel