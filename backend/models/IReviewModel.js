const mongoose = require('mongoose')
const { float } = require('webidl-conversions')
const { serializeInteger } = require('whatwg-url')

const IReviewSchema = new mongoose.Schema({

     instructor_id :{type: String, },
     user_id :{type: String,       },
     user_name :{type: String,       },
     review:{type: String,      },
     
} 
, {timestamps: true }
)

const InstructorReview = mongoose.model("InstructorReview",IReviewSchema )
module.exports=InstructorReview