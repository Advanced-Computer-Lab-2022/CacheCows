const nodemailer=require('nodemailer')
const asyncHandler = require('express-async-handler')
const express = require("express");
const mongoose = require('mongoose');
const corp=require('../models/corporateTraineeModel');
const instructors = require('../models/InstructorsModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const validator = require('validator')
const course=require('../models/coursesModel')
const reg=require('../models/corpregistercourse')


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
const corp_user=req.body.corp_user;
const corp_pass=req.body.corp_pass;
const corp_email=req.body.corp_email;
const corp_bd=req.body.corp_bd;
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
    const corp_id=req.user._id
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.indv_pass, salt)
  await corp.findByIdAndUpdate(corp_id,{corp_pass:hashedPassword},{new:true})
  
  res.status(200).json("updated")
  }
  catch(error){
    res.status(400).json({error:error.message})
  
  }
}


const sendEmailcrop=async (req,res)=>{
  try{
    const croprate=await corp.findOne({corp_email:req.body.corp_email})
    const email=croprate.corp_email
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


const registercourse=async (req,res)=>{
  const trainee_id=req.user._id
  const course_id=req.body.userId
  try{
    
      const crop=await reg.findOne({trainee_id:trainee_id,course_id:course_id})
      if(crop){
        res.status(200).json("already registered")
      }
      else{
   const trainee_course= await reg.create({trainee_id:trainee_id,course_id:course_id})
   res.status(200).json(trainee_course)
      }
  }
  catch(error){
    res.status(400).json({error:error.message})
  }
}
const getregistercourses=async (req,res)=>{
  
  try{
    const courses=await reg.find(req.user._id)
    const data=[]
    for(let i=0;i<courses.length;i++){
     data[i]=await course.findById(courses[i].course_id)
    }
    res.status(200).json(data)
  }
  catch(error){
    res.status(400).json({error:error.message})
  }
}

const rating=async(req,res)=>{
  try{
  const instructor=await instructors.findById(req.query._id)
     var total_rating=instructor.instructor_total_rate
     
    var  total_no_rate=instructor.instructor_total_no_rate
  total_rating+=req.body.instructor_rate
  total_no_rate+=1
  var total_rate=total_rating/total_no_rate
  await instructors.findByIdAndUpdate(req.query._id,{instructor_rate:total_rate,instructor_total_rate:total_rating,instructor_total_no_rate:total_no_rate},{new:true})
  res.status(200).json('rating added')
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
          type : 'corptrainee',
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
    const generateToken = (_id) => {
      return jwt.sign({ _id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
      })
    } 
  

module.exports={getAllcrpTrainee,getOnecrpTrainee,setcrpTrainee,deletecrpTrainee,updatecrptrainee, loginCorpTrainee, getMe,changepassword,sendEmailcrop,registercourse,getregistercourses,rating};