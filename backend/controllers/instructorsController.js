

const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const instructors = require('../models/InstructorsModel')
const course=require('../models/coursesModel');
const { findById, findByIdAndUpdate } = require('../models/InstructorsModel');
const nodemailer=require('nodemailer')
const validator = require('validator')




var transporeter=nodemailer.createTransport({
  service:'gmail',
  
  auth:{
   user:process.env.MAIL,
   pass:process.env.PASS
  }
});
// @desc Get Instructors
// @routes GET /api/Instructors
// @access Private 

const getInstructors = asyncHandler(async (req, res) => {

    const allInstructors = await instructors.find()
    res.status(200).json(allInstructors)
})

const getInstructor =  asyncHandler(async (req, res) => {
    
    const Instructor = await instructors.find({Instructor_name: req.body.Instructor_name})
    if (Instructor.toString() === ""){
      res.status(400).json({error:'Instructor Not Found'})
    }
     res.status(200).json({Instructor})
     
    })

// @desc Set Instructors
// @routes POST /api/Instructors
// @access Private 
const setInstructor = asyncHandler(async(req, res) => {
    if (!req.body.instructor_name){
        res.status(400)
        throw new Error('Please add a text field')
    }

    const Instructor = await instructors.create({
        instructor_name : req.body.instructor_name,
        instructor_id : req.body.instructor_id,
        instructor_email : req.body.instructor_email,
        country : req.body.country,
        instructor_bd : req.body.instructor_bd,
        instructor_total_no_rate:0,
        instructor_total_rate:0
    })
    res.status(200).json(Instructor)
})

// @desc Update Instructors
// @routes PUT /api/Instructors
// @access Private 
const updateInstructor = asyncHandler(async (req, res) => {
    
    const Instructor = await instructors.find({_id : req.body._id})
    
    if (!Instructor){
        res.status(400)
        throw new Error ('Instructor not found')
    }
    const updatedInstructor = await instructors.findOneAndUpdate({_id : req.body._id}, req.body ,{
        new : true,
    })
    res.status(200).json(updatedInstructor)
})
// @desc DELTE Instructors
// @routes DELETE /api/Instructors
// @access Private 
const deleteInstructor =  asyncHandler(async (req, res) => {
    
    const Instructor = await instructors.find({instructor_user: req.body.instructor_user})
    if (Instructor.toString() === ""){
        res.status(400)
        throw new Error ('Instructor not found')
    }
     await instructors.deleteOne({instructor_user: req.body.instructor_user})
     res.status(200).json({Instructor})
     
    })

// instructor creating a new course 
const createCourse=async (req,res)=>
{
 try{
 const inst=await instructors.findById(req.params.id)}
 catch(error){
     res.status(400).json({error:error.message})
 }

 const course_name=req.body.course_name;
 const instructor_name=inst.instructor_name;
 const instructor_id=req.params.id;
 const course_price=req.body.course_price;
 const course_summary=req.body.course_summary;
 const course_subtitles=req.body.course_subtitle;

try{
 course.create({course_name,instructor_name,instructor_id,course_price,course_summary,course_subtitles})
 res.status(200).json("course created!")
}
catch(error){
 res.status(400).json({error:error.message})
}
}


const changepassword=async(req,res)=>{

  try{
    const inst_id = req.user._id
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.instructor_pass, salt)
    const instructor =await instructors.findByIdAndUpdate(inst_id,{instructor_pass:hashedPassword},{new:true})
   
    console.log(inst_id)

  
    res.status(200).json(instructor)
  }
  catch(error){
    res.status(400).json({error:error.message})
  
  }
}


const sendEmailInstructor=async(req,res)=>{
  try{
    const instructor=await instructors.findOne({instructor_email:req.body.instructor_email})
    const email=instructor.instructor_email
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

const InstructorEditEmail =async(req,res)=>{

  try{
    if (!validator.isEmail(req.body.instructor_email)) {
      res.status(400).json({error:'Email Not Valid'})
    }
    const instructor =await instructors.findOneAndUpdate(req.body.inst_id,{instructor_email:req.body.instructor_email},{new:true})
   // const instructor = await instructors.findById(inst_id)
    res.status(200).json(instructor)
  }
  catch(error){
    res.status(400).json({error:error.message})
  
  }
}


const InstructorEditBiography =async(req,res)=>{

  try{
    
    const instructor =await instructors.findOneAndUpdate(req.body.inst_id,{instructor_biography:req.body.instructor_biography},{new:true})
   // const instructor = await instructors.findById(inst_id)
    res.status(200).json(instructor)
  }
  catch(error){
    res.status(400).json({error:error.message})
  
  }
}

const InstructorAcceptTerms =async(req,res)=>{

  try{
    
    const instructoracceptterms =await instructors.findOne(req.body.instructor_id).acceptTerms
    if (instructoracceptterms === false){

    const instructor =await instructors.findOneAndUpdate(req.body.inst_id,{acceptTerms: True},{new:true})
   // const instructor = await instructors.findById(inst_id)
    res.status(200).json(instructor)
    }
  }
  catch(error){
    res.status(400).json({error:error.message})
  
  }
}

const InstructorSetDiscount =async(req,res)=>{
  var g1 = new Date()
  const g2 = new Date(req.body.course_discount_time)

  try{
    if ((g2.getMonth() >= g1.getMonth()) && (g2.getFullYear() >= g1.getFullYear()) && (g2.getDay() >= g1.getDay())){
      
      const TargetCourse = await course.findOne({course_id : req.body.course_id})
      const x = TargetCourse.course_price
      const y = req.body.course_discount
      const value = x*y
      const newprice = x - value
      const Course = await course.findOneAndUpdate({course_id : req.body.course_id},{course_price_after_discount : newprice}, {new:true})
      res.status(200).json(Course)

    }
    else{
      const Course1 = await course.findOneAndUpdate(req.body.course_id,{course_price_after_discount : 0})
      res.status(400).json({error:'Discount Time is Over',g1,g2})
    }
  }
  catch(error){
    res.status(400).json({error:error.message})
  
  }
}



///////////////////////////////////////////////////////////////////////////////////////////
//Authentication


const registerInstructor = asyncHandler(async(req, res) => {

  if (!req.body.instructor_name || !req.body.instructor_email || !req.body.instructor_pass  || !req.body.instructor_user 
    || !req.body.country || !req.body.instructor_bd  ){
      
      res.status(400).json({error:'Please Add All Fields'})
  }
  if (!validator.isEmail(req.body.instructor_email)) {
    res.status(400).json({error:'Email Not Valid'})
  }
  // if ( !req.body.acceptTerms ){
  //   res.status(400).json({error:'Please Accept our Terms And Conditions'})
  // }
  // if (!validator.isStrongPassword(req.body.instructor_pass)) {
  //   throw Error('Password not strong enough')
  // }

  const instructorExists = await instructors.findOne({ instructor_user: req.body.instructor_user })
  
    if (instructorExists) {
      res.status(400).json({error:'Instructor Already Exists'})
    }
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.instructor_pass, salt)



const Instructor = await instructors.create({
      instructor_name : req.body.instructor_name,
      instructor_user : req.body.instructor_user,
      instructor_email : req.body.instructor_email,
      instructor_pass : hashedPassword,
      country : req.body.country,
      instructor_bd : req.body.instructor_bd,
      type : 'instructor',
      acceptterms : False
})

if (Instructor) {
  res.status(201).json({
    _id: Instructor.id,
    name: Instructor.instructor_name,
    email: Instructor.instructor_email,
    type : 'instructor',
    token: generateToken(Instructor._id),
  })
} else {
  res.status(400).json({error:'Invalid User Data'})
}
})




// const registerInstructor2 = asyncHandler(async (req, res) => {
//     const { instructor_name, instructor_email, instructor_pass } = req.body
  
//     if (!instructor_name || !instructor_email || !instructor_pass) {
//       res.status(400)
//       throw new Error('Please add all fields')
//     }
  
//     // Check if user exists
//     const instructorExists = await instructors.findOne({ instructor_email })
  
//     if (instructorExists) {
//       res.status(400)
//       throw new Error('Instructor already exists')
//     }
  
//     // Hash password
//     const salt = await bcrypt.genSalt(10)
//     const hashedPassword = await bcrypt.hash(instructor_pass, salt)
  
//     // Create user


    
//     const Instructor = await instructors.create({
//       instructor_name, instructor_email, instructor_pass: hashedPassword,
//     })
  
//     if (Instructor) {
//       res.status(201).json({
//         _id: Instructor.instructor_id,
//         name: Instructor.instructor_name,
//         email: Instructor.instructor_email,
//         token: generateToken(Instructor._id),
//       })
//     } else {
//       res.status(400)
//       throw new Error('Invalid user data')
//     }
//   })
  
  // @desc    Authenticate a user
  // @route   POST /api/instructors/login
  // @access  Public


  // const loginInstructor = asyncHandler(async (req, res) => {
  //   const { instructor_user, instructor_pass } = req.body
  
  //   // Check for user email
  //   const Instructor = await instructors.findOne({ instructor_user })

  //   if(!Instructor){res.status(400)
  //     throw new Error('Instructor Does not Exist')}
  
  //   else if (Instructor && (await bcrypt.compare(instructor_pass, Instructor.instructor_pass))) {
  //     res.json({
  //       _id: Instructor.id,
  //       name: Instructor.instructor_name,
  //       username: Instructor.instructor_user,
  //       email: Instructor.instructor_email,
  //       token: generateToken(Instructor._id),
  //     })
  //   } else {
  //     res.status(400)
  //     throw new Error('Wrong Password')
  //   }
  // })

  const loginInstructor = asyncHandler(async (req, res) => {
    const { instructor_user, instructor_pass } = req.body
    
      const Instructor = await instructors.findOne({ instructor_user })
      if (!Instructor){ res.status(400).json({error:'Instructor Does Not Exist'})}


     else if (Instructor && (await bcrypt.compare(instructor_pass, Instructor.instructor_pass)))
     { 
      res.json({
        _id: Instructor.id,
        name: Instructor.instructor_name,
        username: Instructor.instructor_user,
        email: Instructor.instructor_email,
        type : 'instructor',
        token: generateToken(Instructor._id),
      })
     }
     else{res.status(400).json({error:'Wrong Password'})}
  } )

  // @desc    Get user data
  // @route   GET /api/users/me
  // @access  Private
  const getMe = asyncHandler(async (req, res) => {
    res.status(200).json(req.Instructor)
  })
  
  // Generate JWT
  const generateToken = (_id) => {
    return jwt.sign({ _id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    })
  } 


module.exports = {
    getInstructors,
    setInstructor,
    updateInstructor,
    deleteInstructor,
    getInstructor,
    createCourse,
    registerInstructor,
    // registerInstructor2,
    loginInstructor,
    getMe,
    changepassword,
    
    sendEmailInstructor,
    InstructorEditEmail,
    InstructorEditBiography,
    InstructorSetDiscount,
    InstructorAcceptTerms
}

