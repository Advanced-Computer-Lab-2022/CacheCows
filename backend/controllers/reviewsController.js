const asyncHandler = require('express-async-handler')

const ireviews = require('../models/IReviewModel')
const creviews = require('../models/CReviewModel')


const getIReviews = asyncHandler(async (req, res) => {

    const allireviews = await ireviews.find()
    res.status(200).json(allireviews)
})

const getIReview =  asyncHandler(async (req, res) => {
    
    const review = await ireviews.find({instructor_id: req.body.instructor_id})
    if (review.toString() === ""){
        res.status(400).json({error:'No Reviews Found'})
    }
     res.status(200).json(review)
     
    })

 
const setIReview = asyncHandler(async(req, res) => {
    if (req.body.review == ""){
        res.status(400).json({error:'No Reviews Found'})
    }

    const review = await ireviews.create({
        instructor_id: req.body.instructor_id,
        user_id: req.body.user_id,
        user_name: req.body.user_name,
        review: req.body.review
    })
    res.status(200).json(review)
})


const updateIReview = asyncHandler(async (req, res) => {
    
    const review = await ireviews.find({_id: req.body._id})
    
    if (review.toString() === ""){
        res.status(400).json({error:'No Reviews Found'})
    }
    const updatedIReview = await ireviews.findOneAndUpdate({_id: req.body._id},
         req.body ,{
        new : true,
    })
    res.status(200).json(updatedIReview)
})

const deleteIReview =  asyncHandler(async (req, res) => {
    
    const review = await ireviews.find({review: req.body.review})
    if (review.toString() === ""){
        res.status(400).json({error:'No Reviews Found'})
    }
     await ireviews.deleteOne({review: req.body.review})
     res.status(200).json({review})
     
    })
    /////////////////////////////////////////////////////////////////
    const getCReviews = asyncHandler(async (req, res) => {

        const allcreviews = await creviews.find()
        res.status(200).json(allcreviews)
    })
    
    const getCReview =  asyncHandler(async (req, res) => {
        
        const review = await creviews.find({course_id : req.body.course_id})
        if (review.toString() === ""){
            res.status(400).json({error:'No Reviews Found'})
        }
         res.status(200).json(review)
         
        })
    
     
    const setCReview = asyncHandler(async(req, res) => {
        if (req.body.review == ""){
            res.status(400).json({error:'No Reviews Found'})
        }
    
        const review = await creviews.create({
            course_id: req.body.course_id,
            user_id: req.body.user_id,
            user_name: req.body.user_name,
            review: req.body.review
        })
        res.status(200).json(review)
    })
    
    
    const updateCReview = asyncHandler(async (req, res) => {
        
        const review = await creviews.find({_id: req.body._id})
        
        if (review.toString() === ""){
            res.status(400).json({error:'No Reviews Found'})
        }
        const updatedCReview = await creviews.findOneAndUpdate({course_id: req.body.course_id, user_id: req.body.user_id},
             req.body ,{
            new : true,
        })
        res.status(200).json(updatedCReview)
    })
    
    const deleteCReview =  asyncHandler(async (req, res) => {
        
        const review = await creviews.find({review: req.body.review})
        if (review.toString() === ""){
            res.status(400).json({error:'No Reviews Found'})
        }
         await creviews.deleteOne({review: req.body.review})
         res.status(200).json({review})
         
        })







module.exports = {
    getIReviews,
    getIReview,
    setIReview,
    updateIReview,
    deleteIReview,
    
    getCReviews,
    getCReview,
    setCReview,
    updateCReview,
    deleteCReview
}
