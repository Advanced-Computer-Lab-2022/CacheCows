const mongoose = require('mongoose')
const { float } = require('webidl-conversions')
const { serializeInteger } = require('whatwg-url')

const CoursesSchema = new mongoose.Schema({

     course_id :{type: String,      },
     course_name :{type: String,       },
     instructor_name:{type: String,      },
     instructor_id:{type: String,      },
     course_rating:{type: Number,      },
     course_discount:{type: Number, required: false,  },
     course_price:{type: Number, },  
     course_summary:{type: String,  },
     course_total_hours:{type: Number, },  
     course_subject:{type: String,  },
     course_exercise:{type: String,   },
     course_outline:{type: String,  },
     course_video:{type: String,  },
     course_preview:{type: String,  },
     course_subtitles:{type: String,  }
     
     
} 
, {timestamps: true }
)

const coursesModel = mongoose.model("courses",CoursesSchema )
module.exports=coursesModel