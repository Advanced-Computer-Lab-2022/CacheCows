const nodemailer=require('nodemailer')
const asyncHandler = require('express-async-handler')
const express = require("express");
const mongoose = require('mongoose');
const corp=require('../models/corporateTraineeModel');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const validator = require('validator')



var transporeter=nodemailer.createTransport({
  service:'gmail',
  
  auth:{
   user:process.env.MAIL,
   pass:process.env.PASS
  }
});
const getAllcrpTrainee = asyncHandler(async (req, res) => {

    const val = await corp.find()
    res.status(200).json(val)
})

const setcrpTrainee =async (req,res)=>{
const corp_name=req.body.corp_name;
const Country=req.body.Country;
const corp_user=req.body.Country;
const corp_pass=req.body.Country;
const corp_email=req.body.Country;
const corp_bd=req.body.Country;
try{
    await corp.create({corp_name,Country,corp_bd,corp_email,corp_pass,corp_user});
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


const deletecrpTrainee=  asyncHandler(async (req, res) => {
    
  const Crp = await corp.find({corp_user: req.body.corp_user})
  if (corp.toString() === ""){
    res.status(400).json({error:'Trainee Not Found'})
  }
   await corp.deleteOne({corp_user: req.body.corp_user})
   res.status(200).json({Crp})
   
  })

const updatecrptrainee=async(req,res)=>{
    try{
        await corp.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).json("updated!");
    }
    catch(error){
        res.status(400).json("not updated");
    }
}

const changepassword=async(req,res)=>{

  try{
    const crop_id=req.CorpTrainee._id
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.indv_pass, salt)
  await crop.findByIdAndUpdate(crop_id,{corp_pass:hashedPassword},{new:true})
  
  res.status(200).json("updated")
  }
  catch(error){
    res.status(400).json({error:error.message})
  
  }
}


const sendEmailcrop=async (req,res)=>{
  try{
    const croprate=await corp.findOne({crop_email:req.body.crop_email})
    const email=croprate.crop_email
    var MailOptions={
      from:process.env.MAIL,
      to:email,
      subject:'password recovery',
      text:'send link to change password  '
    };
    transporeter.sendMail(MailOptions,function(error,info){
      if(error){
          res.status(400).json({error:error.message})
      }
      else{
          res.status(200).json(info)
      }
    })
  }
  catch(error){
res.status(400).json({error:error.message})
  }

}


//////////////
//Authentication
// corp_name, 
// Country,
// corp_user,
// corp_pass,
// corp_bd,
// corp_email


  
  
  
    const loginCorpTrainee = asyncHandler(async (req, res) => {
      const { corp_user, corp_pass } = req.body
    
      // Check for user email
      const CorpTrainee = await corp.findOne({ corp_user })
      if(!CorpTrainee){res.status(400).json({error:'Trainee Does Not Exist'})}
    
      else if (CorpTrainee && (await bcrypt.compare(corp_pass, CorpTrainee.corp_pass))) {
        res.json({
          _id: CorpTrainee.id,
          corp_name: CorpTrainee.corp_name,
          email: CorpTrainee.corp_email,
          username: CorpTrainee.corp_user,
          token: generateToken(CorpTrainee._id),
        })
      } else {
        res.status(400).json({error:'Wrong Password'})
      }
    })
    
    // @desc    Get user data
    // @route   GET /api/users/me
    // @access  Private
    const getMe = asyncHandler(async (req, res) => {
      res.status(200).json(req.CorpTrainee)
    })
    
    // Generate JWT
    const generateToken = (id) => {
      return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
      })
    } 
  

module.exports={getAllcrpTrainee,getOnecrpTrainee,setcrpTrainee,deletecrpTrainee,updatecrptrainee, loginCorpTrainee, getMe,changepassword,sendEmailcrop};