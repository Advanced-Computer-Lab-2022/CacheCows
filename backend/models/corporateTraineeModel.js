const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const corpTraineeSchema= new mongoose.Schema(
    {
        Name:{
            type:String,
            required:true,
        },
        Country:{
            type:String,
            required:false,
        }
    }

)

const corporateTrainee=mongoose.model('corporateTrainee',corpTraineeSchema);
module.exports=corporateTrainee;