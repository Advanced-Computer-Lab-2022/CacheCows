const express = require("express");
const mongoose = require('mongoose');
const indv=require('../models/individualTraineeModel');
const reg=require('../models/indvtraineeregistercourse')
const course=require('../models/coursesModel')
const  instructors = require('../models/InstructorsModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const nodemailer=require('nodemailer')
const validator = require('validator')
const { protect } = require('../middleware/IndivTraineeAuthMiddleware')


var transporeter=nodemailer.createTransport({
  service:'gmail',
  
  auth:{
   user:process.env.MAIL,
   pass:process.env.PASS
  }
});


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
const getAllinvdTrainees = asyncHandler(async (req, res) => {

  const allindvtrainees = await indv.find()
  res.status(200).json(allindvtrainees)
})


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

const deleteIndvTrainee=  asyncHandler(async (req, res) => {
    
  const Indv = await indv.find({indv_user: req.body.indv_user})
  if (Indv.toString() === ""){
    res.status(400).json({error:'Trainee Not Found'})
  }
   await indv.deleteOne({indv_user: req.body.indv_user})
   res.status(200).json({Indv})
   
  })
const updateindvtrainee=async(req,res)=>{
  try{
      await indv.findByIdAndUpdate(req.params.id,req.body,{new:true});
      res.status(200).json("updated!");
  }
  catch(error){
      res.status(400).json("not updated");
  }
}

const changepassword=async(req,res)=>{

  try{
    
    const indv_id=req.user._id
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.indv_pass, salt)
    
  const indv1=await indv.findByIdAndUpdate(indv_id,{indv_pass:hashedPassword},{new:true})
  
  res.status(200).json(indv1)
  }
  catch(error){
    res.status(400).json({error:error.message})
  
  }
}


const sendEmailIndv=async (req,res)=>{
  try{
    const indvidual=await indv.findOne({indv_email:req.body.indv_email})
    const email=indvidual.indv_email
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
  const course_id=req.query._id
  try{
   const trainee_course= await reg.create({trainee_id,course_id})
   res.status(200).json(trainee_course)
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



//////////////////////////////////////////////////////////////////////////////////////////
//Authentication
//Name, 
// Country,
// indv_user,
// indv_pass,
// indv_email,
// indv_bd

const registerIndTrainee = asyncHandler(async(req, res) => {
  if (!req.body.Name || !req.body.indv_user || !req.body.indv_email  || !req.body.indv_pass 
    || !req.body.Country || !req.body.indv_bd ){
      res.status(400).json({error:'Please Add all Fields'})
  }
  if (!validator.isEmail(req.body.indv_email)) {
    res.status(400).json({error:'Email is not Valid'})
  }
  // if (!validator.isStrongPassword(req.body.indv_pass)) {
  //   throw Error('Password not strong enough')
  // }
  const indivExists = await indv.findOne({ indv_email: req.body.indv_email })
  
    if (indivExists) {
      res.status(400).json({error:'Trainee Already Exists!'})
    }
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.indv_pass, salt)



const IndivTrainee = await indv.create({
      Name : req.body.Name,
      indv_user : req.body.indv_user,
      indv_email : req.body.indv_email,
      indv_pass : hashedPassword,
      Country : req.body.Country,
      indv_bd : req.body.indv_bd,
})

if (IndivTrainee) {
  res.status(201).json({
    _id: IndivTrainee.id,
    name: IndivTrainee.Name,
    email: IndivTrainee.indv_email,
    token: generateToken(IndivTrainee._id),
  })
} else {
  res.status(400).json({error:'Invalid User Data'})
}
})








  const loginIndTrainee = asyncHandler(async (req, res) => {
    const { indv_user, indv_pass } = req.body
    
  
    // Check for user email
    const IndivTrainee = await indv.findOne({ indv_user })
    
    if(!IndivTrainee){res.status(400).json({error:'Trainee Does Not Exist'})}
  
    else
  
    if (IndivTrainee && (await bcrypt.compare(indv_pass, IndivTrainee.indv_pass))) {
      res.json({
        _id: IndivTrainee.id,
        name: IndivTrainee.Name,
        username: IndivTrainee.indv_user,
        email: IndivTrainee.indv_email,
        token: generateToken(IndivTrainee._id),
      })
    } else {
      res.status(400).json({error:'Wrong Password'})
    }
  })
  
  // @desc    Get user data
  // @route   GET /api/users/me
  // @access  Private
  const getMe = asyncHandler(async (req, res) => {
    res.status(200).json(req.IndivTrainee)
  })
  
  // Generate JWT
  const generateToken = (_id) => {
    return jwt.sign({ _id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    })
  } 


  

module.exports={getAllinvdTrainee,getOneindvTrainee,setindvTrainee,deleteIndvTrainee, getAllinvdTrainees,
  updateindvtrainee,registerIndTrainee, loginIndTrainee, getMe,changepassword,sendEmailIndv,registercourse,getregistercourses,rating };
