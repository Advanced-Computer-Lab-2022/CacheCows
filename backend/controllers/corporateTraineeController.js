const express = require("express");
const mongoose = require('mongoose');
const corp=require('../models/corporateTraineeModel');


const getAllcrpTrainee= (req,res)=>{
    corp.find((err,val)=>{
        if(err){
          console.log(err);
        }
        else{
          res.status(200).json(val);
        }
        })
}

const setcrpTrainee =async (req,res)=>{
const Name=req.body.Name;
const Country=req.body.Country;
const corp_user=req.body.Country;
const corp_pass=req.body.Country;
const corp_email=req.body.Country;
const corp_bd=req.body.Country;
try{
    await corp.create({Name,Country,corp_bd,corp_email,corp_pass,corp_user});
    res.status(200).json(req.body);
}
catch(error){
    res.status(400).json({error:error.message});
}


}

const getOnecrpTrainee=async (req,res)=>{
    try{
        const crpTrainee=await corp.findById(req.params.id);
        res.status(200).json(crpTrainee);
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
    

   
}


const deletecrpTrainee=async(req,res)=>{
    try{
        await corp.findByIdAndDelete(req.params.id)
        res.status(200).json("deleted");
    }
    catch(error){
      res.status(400).json({error: error.message});
    }
}

const updatecrptrainee=async(req,res)=>{
    try{
        await corp.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).json("updated!");
    }
    catch(error){
        res.status(400).json("not updated");
    }
}


module.exports={getAllcrpTrainee,getOnecrpTrainee,setcrpTrainee,deletecrpTrainee,updatecrptrainee};
