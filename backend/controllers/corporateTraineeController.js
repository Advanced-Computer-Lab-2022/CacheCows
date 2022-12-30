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
const review=require('../models/IReviewModel')

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
    const corp_id=req.query.userId
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.corp_pass, salt)
  await corp.findByIdAndUpdate(corp_id,{corp_pass:hashedPassword},{new:true})
  
  res.status(200).json("updated")
  }
  catch(error){
    res.status(400).json({error:error.message})
  
  }
}
const del =async(req,res)=>{
  try{
    await reg.deleteMany()
    res.status(200).json("deleted")

  }
  catch(error){
    res.status(400).json({error:error.message})
  }
}
const viewAll=async(req,res)=>{
 const All=await reg.find();
 res.status(200).json(All)
}


const sendEmailcrop=async (req,res)=>{
  try{
    const croprate=await corp.findOne({corp_email:req.body.corp_email})
    const email=croprate.corp_email
    var MailOptions={
      from:process.env.MAIL,
      to:email,
      subject:'password recovery',
      text:'http://localhost:3000/cropchangepassword?userId='+croprate._id
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
res.status(400).json({error:'Email Not Found'})
  }

}

const sendCertificateEmail=async (req,res)=>{
  try{
    const corporate=await corp.findOne({corp_user : req.body.corp_user})
    
    const email=corporate.corp_email

    const coursesubject=await course.findOne({course_id : req.body.course_id})
    
    console.log(coursesubject)

    const subjectt = coursesubject.course_id;
    console.log(subjectt)

    var MailOptions={
      from:process.env.MAIL,
      to:email,
      subject: "Certificate Of Completion  "   + subjectt,
      text:'Congratulations '+ corporate.corp_name+'! We are so proud of your achievment! Here is your certificate of Completion, Keep Grinding!',
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


const registercourse=async (req,res)=>{
  const trainee_id=req.user._id
  const Appeal=req.body.Appeal
  const course_id=req.query.userId
  const course_name=req.query.coursename
  const corp_name=req.user.corp_name
  const flag=false
  try{
      const crop=await reg.findOne({trainee_id:trainee_id,course_id:course_id})
      if(crop){
        res.status(200).json("already registered")
      }
      else{
        const trainee_course= await reg.create({trainee_id:trainee_id,course_id:course_id,flag:false,appeal:Appeal,course_name:course_name,trainee_name:corp_name})
        res.status(200).json(trainee_course)
      }
  }
  catch(error){
    res.status(400).json({error:error.message})
  }
}
const getregistercourses=async (req,res)=>{
  
  try{
    const corp_id=req.user._id
    const courses=await reg.find({trainee_id:corp_id,flag:true})
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
  var total_rate=(total_rating/total_no_rate)
  await instructors.findByIdAndUpdate(inst_id,{instructor_rate:total_rate,instructor_total_rate:total_rate,instructor_total_no_rate:total_no_rate},{new:true})
  res.status(200).json('rating added')
  }
  catch(error){
    res.status(400).json({error:error.message})
  }
 
 
}
const reviewinst=async(req,res)=>{
  try{
    const corp_id=req.user._id
    const inst_id=req.query.userId
  const rev=await review.findOne({user_id:corp_id,instructor_id:inst_id})
  if(rev){
    res.status(200).json("already added review ")
  }
  else{
    const revw=await review.create({user_id:corp_id,instructor_id:inst_id,review:req.body.review})
    res.status(200).json(revw)
  }
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
  

module.exports={getAllcrpTrainee,getOnecrpTrainee,setcrpTrainee,deletecrpTrainee,updatecrptrainee, loginCorpTrainee, getMe,changepassword,sendEmailcrop,registercourse,getregistercourses,rating,reviewinst, sendCertificateEmail,del,viewAll};