const asyncHandler = require('express-async-handler')

const admins = require('../models/adminsModel')
const instructors = require('../models/InstructorsModel')
const corp=require('../models/corporateTraineeModel');

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
        res.status(400)
        throw new Error ('Admin not found')
    }
     res.status(200).json({Admin})
     
    })

// @desc Set Admins
// @routes POST /api/Admins
// @access Private 
const setAdmin = asyncHandler(async(req, res) => {
    if (!req.body.admin_name){
        res.status(400)
        throw new Error('Please add a text field')
    }

    const Admin = await admins.create({
        admin_name : req.body.admin_name,
        admin_user: req.body.admin_user,
        admin_pass: req.body.admin_pass,
        admin_id : req.body.admin_id,
        admin_email : req.body,admin_email,
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
        res.status(400)
        throw new Error ('Admin not found')
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
    
    const Admin = await admins.find({Admin_name: req.body.Admin_name})
    if (Admin.toString() === ""){
        res.status(400)
        throw new Error ('Admin not found')
    }
     await admins.deleteOne({Admin_name: req.body.Admin_name})
     res.status(200).json({Admin})
     
    })

    const createInstructor = asyncHandler(async(req, res) => {
        if (!req.body.instructor_user){
            res.status(400)
            throw new Error('Please add a text field')
        }
    
        const Instructor = await instructors.create({
            instructor_user : req.body.instructor_user,
            instructor_pass : req.body.instructor_pass
        })
        res.status(200).json({Instructor})
       })

       const createCorpTrainee = asyncHandler(async(req, res) => {
        if (!req.body.corp_user){
            res.status(400)
            throw new Error('Please add a text field')
        }
    
        const Corp = await corp.create({
            corp_user : req.body.corp_user,
            corp_pass : req.body.corp_pass
        })
        res.status(200).json({Corp})
       })







module.exports = {
    getAdmins,
    setAdmin,
    updateAdmin,
    deleteAdmin,
    getAdmin,
    createAdmin,
    createCorpTrainee,
    createInstructor
}
