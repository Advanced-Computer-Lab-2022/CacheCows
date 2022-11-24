const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const corpTraineeSchema= new mongoose.Schema(
    {
        corp_name:{
            type:String,
            required:true,
        },
        Country:{
            type:String,
            required:false,
        },
        corp_user:{
            type:String,
            required:false,
        },
        corp_pass:{
            type:String,
            required:false,
        },
        corp_bd:{
            type:String,
            required:false,
        },
        corp_email:{
            type:String,
            required:false,
            unique : true,
        }
    }

)

const corporateTrainee=mongoose.model('corporateTrainee',corpTraineeSchema);
module.exports=corporateTrainee;


