const asyncHandler = require('express-async-handler')

const reports = require('../models/reportsModel')
const comments = require('../models/reportcommentsModel')



    /////////////////////////////////////////////////////////////////
    const getReports = asyncHandler(async (req, res) => {

        const allReports = await reports.find()
        res.status(200).json(allReports)
    })
    
    const getReport =  asyncHandler(async (req, res) => {
        
        const report = await reports.find({user_id : req.body.user_id})
        if (report.toString() === ""){
            res.status(400).json({error:'No Reports Found'})
        }
         res.status(200).json(report)
         
        })

        const get1Report =  asyncHandler(async (req, res) => {
        
            const report = await reports.findById(req.body._id)
            if (report.toString() === ""){
                res.status(400).json({error:'Report Resolved'})
            }
             res.status(200).json(report)
             
            })

        const getCReport =  asyncHandler(async (req, res) => {
        
            const creport = await reports.find({course_id : req.body.course_id})
            if (creport.toString() === ""){
                res.status(400).json({error:'No Reports Found'})
            }
             res.status(200).json(creport)
             
            })
    
     
    const setReport = asyncHandler(async(req, res) => {

        try{
            const report = await reports.create({
                report : req.body.report,
                report_type : req.body.report_type,
                course_id: req.body.course_id,
                admin_id : '',
                user_id: req.body.user_id,
                user_name: req.body.user_name,
                report_status: 'Unseen',
                report_comment : req.body.report_comment,
            })
            res.status(200).json({success : 'Report Added Successfully!'})
          }
          catch(error){
            res.status(400).json({error : 'Please Fill Out All Fields',obj : req.body})
          }
        
    })
    
    
    const updateReport = asyncHandler(async (req, res) => {
        try{
            const report = await reports.find({_id: req.body._id})
        
            if (report.toString() === ""){
               res.status(400).json({error:'No Reports Found'})
           }
           const updatedReport = await reports.findOneAndUpdate({_id: req.body._id},
              req.body ,{
              new : true,
           })
           res.status(200).json({success : 'Report Updated Successfully!'})
          }
          catch(error){
            res.status(400).json({error:error.message})
          }
        
        
    })
    
    const deleteReport =  asyncHandler(async (req, res) => {
        
        const report = await reports.find({_id: req.body._id})
        if (report.toString() === ""){
            res.status(400).json({error:'No report Found'})
        }
         await reports.deleteOne({_id: req.body._id})
         res.status(200).json({success : 'Report Deleted Successfully!'})
         
        })

             
    const AddComment = asyncHandler(async(req, res) => {

        try{
            const comment = await comments.create({
                report_id : req.body.report_id, 
                report_comment : req.body.report_comment,
                course_id : req.body.report_comment,
                user_id : req.body.report_comment,
                admin_id : req.body.report_comment,
            })
            res.status(200).json({success : 'Comment Added Successfully!'})
          }
          catch(error){
            res.status(400).json({error : 'Please Fill Out All Fields',obj : req.body})
          }
        
    })

    const getComments = asyncHandler(async (req, res) => {

        const comment = await comments.find({report_id : req.body.report_id})
        if(comment.toString() === ""){
            res.status(400).json({error : "No Comments On this Report"})
        }
        res.status(200).json(comment)
    })







module.exports = {
    getReports,
    getReport,
    getCReport,
    setReport,
    updateReport,
    deleteReport,
    get1Report,
    AddComment,
    getComments
}
