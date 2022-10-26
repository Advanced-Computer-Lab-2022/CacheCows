const asyncHandler = require('express-async-handler')

const countries = require('../models/countriesModel')

const getCountries = asyncHandler(async (req, res) => {

    const allCountries = await countries.find()
    res.status(200).json(allCountries)
})

module.exports = {
    getCountries
}