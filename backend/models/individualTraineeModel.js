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
        },
        indv_user:{
            type:String,
            required:false,
            unique : true
        },
        indv_pass:{
            type:String,
            required:true,
        },
        indv_email:{
            type:String,
            required:true
            , unique : true,
        },
        indv_bd:{
            type:String,
            required:false,
        },
        type : {type: String , required : false},
        wallet:{type:Number,required:true}

        
    }

)

const individualTrainee=mongoose.model('individualTrainee',indvTraineeSchema);
module.exports=individualTrainee;

