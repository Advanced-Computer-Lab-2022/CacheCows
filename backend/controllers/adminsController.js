const asyncHandler = require('express-async-handler')

const admins = require('../models/adminsModel')
const instructors = require('../models/InstructorsModel')
const corp=require('../models/corporateTraineeModel');

const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const validator = require('validator')




// @desc Get Admins
// @routes GET /api/Admins
// @access Private 
const getAdmins = asyncHandler(async (req, res) => {

    const allAdmins = await admins.find()
    res.status(200).json(allAdmins)
})

const getAdmin =  asyncHandler(async (req, res) => {
    
    const Admin = await admins.find({Admin_name: req.body.Admin_name})
    if (Admin.toString() === ""){
      res.status(400).json({error:'Admin Not Found'})
    }
     res.status(200).json({Admin})
     
    })

// @desc Set Admins
// @routes POST /api/Admins
// @access Private 
const setAdmin = asyncHandler(async(req, res) => {
    if (!req.body.admin_id){
        res.status(400)
        throw new Error('Please add a text field')
    }

    const Admin = await admins.create({
        admin_name : req.body.admin_name,
        admin_user: req.body.admin_user,
        admin_pass: req.body.admin_pass,
        admin_id : req.body.admin_id,
        admin_email : req.body.admin_email,
        country : req.body.country,
        admin_bd : req.body.admin_bd
    })
    res.status(200).json(Admin)
})

  const createAdmin = asyncHandler(async(req, res) => {
    if (!req.body.admin_user){
        res.status(400)
        throw new Error('Please add a text field')
    }

    const Admin = await admins.create({
        admin_user : req.body.admin_user,
        admin_pass : req.body.admin_pass
    })
    res.status(200).json(Admin)
   })
// @desc Update Admins
// @routes PUT /api/Admins
// @access Private 
const updateAdmin = asyncHandler(async (req, res) => {
    
    const Admin = await admins.find({_id: req.body._id})
    
    if (Admin.toString() === ""){
      res.status(400).json({error:'Admin Not Found'})
    }
    const updatedAdmin = await admins.findByIdAndUpdate({_id: req.body._id}, req.body ,{
        new : true,
    })
    res.status(200).json(updatedAdmin)
})
// @desc DELTE Admins
// @routes DELETE /api/Admins
// @access Private 
const deleteAdmin =  asyncHandler(async (req, res) => {
    
    const Admin = await admins.find({admin_user: req.body.admin_user})
    if (Admin.toString() === ""){
      res.status(400).json({error:'Admin Not Found'})
    }
     await admins.deleteOne({admin_user: req.body.admin_user})
     res.status(200).json({Admin})
     
    })

  

     ////////////////////////////////////////////////

const getInstructors = asyncHandler(async (req, res) => {

    const allInstructors = await instructors.find()
    res.status(200).json(allInstructors)
})

const getAllcrpTrainee = asyncHandler(async (req, res) => {

  const val = await corp.find()
  res.status(200).json(val)
})
//////////////////////////////////////////////////////////////////////////////////////////////////REgistring


       const registerCorpTrainee = asyncHandler(async(req, res) => {
        if (!req.body.corp_name || !req.body.corp_user || !req.body.corp_pass  || !req.body.corp_email || !req.body.corp_bd
          || !req.body.Country  )
          {
            res.status(400).json({error:'Please Add All fields'})
        }
        if (!validator.isEmail(req.body.corp_email)) {
          res.status(400).json({error:'Email is not valid'})
        }
        // if (!validator.isStrongPassword(req.body.corp_pass)) {
          // res.status(400).json({error:'Password Not Strong Enough'})        // }
        const corpExists = await corp.findOne({ corp_user: req.body.corp_user })
        
          if (corpExists) {
            res.status(400).json({error:'Trainee Already Exists'})
          }
          
          else {

          
          const salt = await bcrypt.genSalt(10)
          const hashedPassword = await bcrypt.hash(req.body.corp_pass, salt)
      
      
      
                      const CorpTrainee = await corp.create({
                        corp_name : req.body.corp_name,
                            corp_user : req.body.corp_user,
                            corp_email : req.body.corp_email,
                            corp_pass : hashedPassword,
                            Country : req.body.Country,
                            corp_bd : req.body.corp_bd,
                      })

                      
                      if (CorpTrainee) {
                        res.status(201).json({
                          _id: CorpTrainee.id,
                          corp_name: CorpTrainee.corp_name,
                          email: CorpTrainee.corp_email,
                          token: generateToken(CorpTrainee._id),
                        })
                        res.status(200).json('Trainee Added!')
                      } else {
                        res.status(400).json({error:'Invalid User Data'})
                      }
            }

      })

///////////////////////////////
///RegisterAdmin

// admin_name
//      admin_user,
//      admin_pass,
//      ,
//      admin_email,
//      country,
//      admin_bd

      const RegisterAdmin = asyncHandler(async(req, res) => {
        if (!req.body.admin_name || !req.body.admin_bd || !req.body.admin_pass  || !req.body.admin_user 
          || !req.body.country || !req.body.admin_email ){
            res.status(400).json({error:'Please Add All fields'})
        }
        if (!validator.isEmail(req.body.admin_email)) {
          res.status(400).json({error:'Email is not valid'})
        }
        // if (!validator.isStrongPassword(req.body.admin_pass)) {
        //   res.status(400).json({error:'Password Not Strong Enough'})
        // }
        const adminExists = await admins.findOne({ admin_email: req.body.admin_email })
        
          if (adminExists) {
            res.status(400).json({error:'Admin Already Exists'})
          }
          const salt = await bcrypt.genSalt(10)
          const hashedPassword = await bcrypt.hash(req.body.admin_pass, salt)
      
      
      
      const Admin = await admins.create({
        admin_name : req.body.admin_name,
        admin_user : req.body.admin_user,
        admin_email : req.body.admin_email,
            admin_pass : hashedPassword,
            country : req.body.country,
            admin_bd : req.body.admin_bd,
      })
      
      if (Admin) {
        res.status(201).json({
          _id: Admin.id,
          name: Admin.admin_name,
          email: Admin.admin_email,
          token: generateToken(Admin._id),
        })
      } else {
        res.status(400).json({error:'Invalid User Data'})
      }
      })
      //////////////////////////////////////////////

      const registerInstructor = asyncHandler(async(req, res) => {
        if (!req.body.instructor_name || !req.body.instructor_email || !req.body.instructor_pass  || !req.body.instructor_user 
          || !req.body.country || !req.body.instructor_bd ){
            res.status(400).json({error:'Please Add All fields'})
        }
        if (!validator.isEmail(req.body.instructor_email)) {
          res.status(400).json({error:'Email is not valid'})
        }
        // if (!validator.isStrongPassword(req.body.instructor_pass)) {
        //   res.status(400).json({error:'Password Not Strong Enough'})
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
      })
      
      if (Instructor) {
        res.status(201).json({
          _id: Instructor.id,
          name: Instructor.instructor_name,
          email: Instructor.instructor_email,
          token: generateToken(Instructor._id),
        })
      } else {
        res.status(400).json({error:'Invalid User Data'})
      }
      })

      //////////////////////
      // admin_name
//      admin_user,
//      admin_pass,
//      ,
//      admin_email,
//      country,
//      admin_bd


      const loginAdmin = asyncHandler(async (req, res) => {
        const { admin_user, admin_pass } = req.body
      
        // Check for user email
        const Admin = await admins.findOne({ admin_user })

        if(!Admin){res.status(400).json({error:'Admin Does Not Exist'})}
      
        else if (Admin && (await bcrypt.compare(admin_pass, Admin.admin_pass))) {
          res.json({
            _id: Admin.id,
            name: Admin.admin_name,
            email: Admin.admin_email,
            username: Admin.admin_user,
            token: generateToken(Admin._id),
          })
        } else {
          res.status(400).json({error:'Wrong Password'})
        }
      })
      
      // @desc    Get user data
      // @route   GET /api/users/me
      // @access  Private
      const getMe = asyncHandler(async (req, res) => {
        res.status(200).json(req.Admin)
      })
      
      // Generate JWT
      const generateToken = (id) => {
        return jwt.sign({ id }, process.env.JWT_SECRET, {
          expiresIn: '30d',
        })
      } 






module.exports = {
    getAdmins,
    setAdmin,
    updateAdmin,
    deleteAdmin,
    getAdmin,
    createAdmin,
    registerCorpTrainee,
    registerInstructor,
    RegisterAdmin,
    loginAdmin,
    getMe,
    getInstructors,
    getAllcrpTrainee
}