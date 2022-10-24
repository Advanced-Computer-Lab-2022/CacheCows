const asyncHandler = require('express-async-handler')

const guests = require('../models/guestsModel')

// @desc Get guests
// @routes GET /api/guests
// @access Private 
const getGuests = asyncHandler(async (req, res) => {

    const allguests = await guests.find()
    res.status(200).json(allguests)
})

const getGuest =  asyncHandler(async (req, res) => {
    
    const guest = await guests.find({guest_name: req.body.guest_name})
    if (guest.toString() === ""){
        res.status(400)
        throw new Error ('guest not found')
    }
     res.status(200).json({guest})
     
    })

// @desc Set guests
// @routes POST /api/guests
// @access Private 
const setGuest = asyncHandler(async(req, res) => {
    if (!req.body.guest_name){
        res.status(400)
        throw new Error('Please add a text field')
    }

    const guest = await guests.create({
        guest_name: req.body.guest_name,
    })
    res.status(200).json(guest)
})

// @desc Update guests
// @routes PUT /api/guests
// @access Private 
const updateGuest = asyncHandler(async (req, res) => {
    
    const guest = await guests.find({_id: req.body._id})
    
    if (guest.toString() === ""){
        res.status(400)
        throw new Error ('guest not found')
    }
    const updatedguest = await guests.findByIdAndUpdate({_id: req.body._id}, req.body ,{
        new : true,
    })
    res.status(200).json(updatedguest)
})
// @desc DELTE guests
// @routes DELETE /api/guests
// @access Private 
const deleteGuest =  asyncHandler(async (req, res) => {
    
    const guest = await guests.find({guest_name: req.body.guest_name})
    if (guest.toString() === ""){
        res.status(400)
        throw new Error ('guest not found')
    }
     await guests.deleteOne({guest_name: req.body.guest_name})
     res.status(200).json({guest})
     
    })







module.exports = {
    getGuests,
    setGuest,
    updateGuest,
    deleteGuest,
    getGuest,
}
