const mongoose = require('mongoose')
const { float } = require('webidl-conversions')
const { serializeInteger } = require('whatwg-url')

const ReportCommentsSchema = new mongoose.Schema({

    report_id : {type: String , required: [true, 'Please Specify Report ID'] }, 
    report_comment : {type: String , required: [true, 'Please Specify Your Report'] },
    course_id : {type: String , required: [true, 'COURSE ID MISSING'] },
    user_id : {type: String , required: [false, 'USER ID MISSING'] },
    admin_id : {type: String , required: [false, 'USER ID MISSING'] },
     
} 
, {timestamps: true }
)

const ReportsComments = mongoose.model("ReportComments",ReportCommentsSchema )
module.exports = ReportsComments