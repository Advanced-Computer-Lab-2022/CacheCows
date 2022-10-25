const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const indvTraineeSchema= new mongoose.Schema(
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

const individualTrainee=mongoose.model('individualTrainee',indvTraineeSchema);
module.exports=individualTrainee;