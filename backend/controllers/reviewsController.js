const asyncHandler = require('express-async-handler')

const ireviews = require('../models/IReviewModel')
const creviews = require('../models/CReviewModel')


const getIReviews = asyncHandler(async (req, res) => {

    const allireviews = await ireviews.find()
    res.status(200).json(allireviews)
})

const getIReview =  asyncHandler(async (req, res) => {
    
    const review = await ireviews.find({review: req.body.review})
    if (review.toString() === ""){
        res.status(400)
        throw new Error ('review not found')
    }
     res.status(200).json({review})
     
    })

 
const setIReview = asyncHandler(async(req, res) => {
    if (req.body.review == ""){
        res.status(400)
        throw new Error('Please add a text field')
    }

    const review = await ireviews.create({
        instructor_id: req.body.instructor_id,
        user_id: req.body.user_id,
        review: req.body.review
    })
    res.status(200).json(review)
})


const updateIReview = asyncHandler(async (req, res) => {
    
    const review = await ireviews.find({_id: req.body._id})
    
    if (review.toString() === ""){
        res.status(400)
        throw new Error ('review not found')
    }
    const updatedIReview = await ireviews.findOneAndUpdate({instructor_id: req.body.instructor_id, user_id: req.body.user_id},
         req.body ,{
        new : true,
    })
    res.status(200).json(updatedIReview)
})

const deleteIReview =  asyncHandler(async (req, res) => {
    
    const review = await ireviews.find({review: req.body.review})
    if (review.toString() === ""){
        res.status(400)
        throw new Error ('review not found')
    }
     await ireviews.deleteOne({review: req.body.review})
     res.status(200).json({review})
     
    })







module.exports = {
    getIReviews,
    setIReview,
    updateIReview,
    deleteIReview,
    getIReview,
}