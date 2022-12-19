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
const review=require('../models/IReviewModel')


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
    
    const indv_id=req.query.userId
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
      text:'http://http://localhost:3000/indvchangepassword?userId='+indvidual._id
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

const sendCertificateEmail=async (req,res)=>{
  try{
    const indvidual=await indv.findOne({indv_user:req.body.indv_user})
    const email=indvidual.indv_email
    var MailOptions={
      from:process.env.MAIL,
      to:email,
      subject:'Certificate of Completion',
      text:'Congratulations '+ indvidual.Name+'! We are so proud of your achievment! Here is your certificate of Completion, Keep Grinding!',
      attachments: [{
        filename: 'Certificate of Completion.pdf',
        path: '/Users/omarashraf/Desktop/Sem 7/ACL/CacheCows/Certificate of Completion.pdf',
        contentType: 'application/pdf'
      }] 
    };
    transporeter.sendMail(MailOptions,function(error,info){
      if(error){
          res.status(400).json({error:error.message})
      }
      else{
          res.status(200).json('email sent')
      }
    })
  }
  catch(error){
res.status(400).json({error:error.message})
  }

}






const del=async (req,res)=>{
try{
  await reg.deleteMany()
  res.status(200).json("deleted")
}
catch(error){
res.status(400).json({error:error.message})
}
}

const registercourse=async (req,res)=>{
  const trainee_id=req.user._id
  const course_id=req.body.userId
  try{
    const indv=await reg.findOne({trainee_id:trainee_id,course_id:course_id})
    if(indv){
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
    const indv_id=req.user._id
    const courses=await reg.find({trainee_id:indv_id})
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
    const inst_id=req.query.userId
  const instructor=await instructors.findById(inst_id)
     var total_rating=instructor.instructor_total_rate
     
    var  total_no_rate=instructor.instructor_total_no_rate
  total_rating+=parseInt(req.body.instructor_rate)
  total_no_rate+=1
  var total_rate=(total_rating/(total_no_rate*5))
  await instructors.findByIdAndUpdate(inst_id,{instructor_rate:total_rate,instructor_total_rate:total_rate,instructor_total_no_rate:total_no_rate},{new:true})
  res.status(200).json('rating added')
  }
  catch(error){
    res.status(400).json({error:error.message})
  }
 
 
}



const reviewinst=async(req,res)=>{
try{
  const indv_id=req.user._id
  const inst_id=req.query.userId
const rev=await review.findOne({user_id:indv_id,instructor_id:inst_id})
if(rev){
  res.status(200).json("already added review ")
}
else{
  const revw=await review.create({user_id:indv_id,instructor_id:inst_id,review:req.body.review})
  res.status(200).json(revw)
}
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
      type : 'indvtrainee',
})

if (IndivTrainee) {
  res.status(201).json({
    _id: IndivTrainee.id,
    name: IndivTrainee.Name,
    email: IndivTrainee.indv_email,
    type : 'indvtrainee',
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
        type : 'indvtrainee',
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
  updateindvtrainee,registerIndTrainee, loginIndTrainee, getMe,changepassword,sendEmailIndv,registercourse,getregistercourses,rating,del,reviewinst,sendCertificateEmail };
