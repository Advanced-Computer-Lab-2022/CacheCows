const mongoose = require('mongoose')
const { float } = require('webidl-conversions')
const { serializeInteger } = require('whatwg-url')

const CoursesSchema = new mongoose.Schema({

     course_id :{type: String, unique : true },
     course_name :{type: String,       },
     instructor_name:{type: String,      },
     instructor_id:{type: String,      },
     course_discount:{type: String, required: false,  },
     course_price:{type: Number, },  
     course_summary:{type: String,  },
     course_total_hours:{type: String, },  
     course_subject:{type: String,  },
     course_exercise:{type: String,   },
     course_outline:{type: String,  },
     course_video:{type: String,  },
     course_rating:{type: Number,  required:false    },
     course_preview1:{type: String,  },
     course_preview2:{type: String,  },
     course_preview3:{type: String,  },
     course_preview4:{type: String,  },
     course_preview5:{type: String,  },
     course_preview6:{type: String,  },

     course_subtitles1:{type: String,  },
     course_subtitles2:{type: String,  },
     course_subtitles3:{type: String,  },

     course_description1:{type: String,  },
     course_description2:{type: String,  },
     course_description3:{type: String,  },
     course_description4:{type: String,  },
     course_description5:{type: String,  },
     course_description6:{type: String,  },
     
     course_subtopic1:{type: String,  },
     course_subtopic2:{type: String,  },
     course_subtopic3:{type: String,  },
     course_subtopic4:{type: String,  },
     course_subtopic5:{type: String,  },
     course_subtopic6:{type: String,  },

     course_discount :{type: Number,  },
     course_price_after_discount :{type: Number,  },
     course_discount_start : {type: Date},
     course_discount_time:{type: Date,  },

     course_total_ratings:{type:Number},
     course_total_no_ratings:{type:Number},

     course_hype:{type:Number},

     
     
     
} 
, {timestamps: true }
)

const coursesModel = mongoose.model("courses",CoursesSchema )
module.exports=coursesModel