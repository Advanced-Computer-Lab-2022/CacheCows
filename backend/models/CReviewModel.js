const mongoose = require('mongoose')
const { float } = require('webidl-conversions')
const { serializeInteger } = require('whatwg-url')

const CReviewSchema = new mongoose.Schema({

     course_id :{type: String, },
     user_id :{type: String,       },
     user_name :{type: String,       },
     review:{type: String,      },
     
} 
, {timestamps: true }
)

const CourseReview = mongoose.model("CourseReviews",CReviewSchema )
module.exports=CourseReview