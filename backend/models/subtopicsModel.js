const mongoose = require('mongoose')
const { float } = require('webidl-conversions')
const { serializeInteger } = require('whatwg-url')

const SubTopicsSchema = new mongoose.Schema({

     course_id : {type: String , required: [true, 'Please Specify Course ID'] },
     course_preview:{type: String, required: [true, 'Please Specify Course ID']  },
     course_subtitles:{type: String, required: [true, 'Please Specify Course ID'] },
     course_description:{type: String, required: [true, 'Please Specify Course ID'] },
     course_subtopic:{type: String, required: [true, 'Please Specify Course ID'] },
     
} 
, {timestamps: true }
)

const SubTopics = mongoose.model("SubTopics",SubTopicsSchema )
module.exports = SubTopics