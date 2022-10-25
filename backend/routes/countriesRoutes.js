const express = require('express')
const router = express.Router()
const controlls=require('../controllers/countriesController')


router.get('/getCountries',controlls.getCountries);


module.exports = router  