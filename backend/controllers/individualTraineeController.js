const express = require("express");
const mongoose = require('mongoose');
const indv=require('../models/individualTraineeModel');



const getAllinvdTrainee= (req,res)=>{
    indv.find((err,val)=>{
        if(err){
          console.log(err);
        }
        else{
          res.status(200).json(val);
        }
        })
}
const setindvTrainee =async (req,res)=>{
  const Name=req.body.Name;
  const Country=req.body.Country;
  try{
      await indv.create({Name,Country});
      res.status(200).json(req.body);
  }
  catch(error){
      res.status(400).json({error:error.message});
  }
}

const getOneindvTrainee=async (req,res)=>{
    
  try{
    const crpTrainee=await indv.findById(req.params.id);
    res.status(200).json(crpTrainee);
}
catch(error){
    res.status(400).json({error:error.message});
}
}

const deleteindvTrainee=async(req,res)=>{
  try{
      await indv.findByIdAndDelete(req.params.id)
      res.status(200).json("deleted");
  }
  catch(error){
    res.status(400).json({error:error.message});
  }
  
}
const updateindvtrainee=async(req,res)=>{
  try{
      await indv.findByIdAndUpdate(req.params.id,req.body,{new:true});
      res.status(200).json("updated!");
  }
  catch(error){
      res.status(400).json("not updated");
  }
}


  

module.exports={getAllinvdTrainee,getOneindvTrainee,setindvTrainee,deleteindvTrainee,updateindvtrainee};