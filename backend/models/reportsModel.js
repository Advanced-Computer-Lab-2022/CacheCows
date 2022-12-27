const mongoose = require('mongoose')
const { float } = require('webidl-conversions')
const { serializeInteger } = require('whatwg-url')

const ReportSchema = new mongoose.Schema({

     report : {type: String , required: [true, 'Please Specify Your Report'] },
     report_type :{type: String , required: [true, 'Please Choose a Report Type'] },
     course_id : {type: String , required: [true, 'COURSE ID MISSING'] },
     user_id : {type: String , required: [true, 'USER ID MISSING'] },
     admin_id : {type: String , required: [false, 'USER ID MISSING'] },
     user_name : {type: String , required: [true, 'USER NAME MISSING'] },
     report_status : {type: String , required: [true, 'REPORT STATUS MISSING'] },
     report_comment : {type: String , required: [false] },
     
} 
, {timestamps: true }
)

const Reports = mongoose.model("Reports",ReportSchema )
module.exports=Reports