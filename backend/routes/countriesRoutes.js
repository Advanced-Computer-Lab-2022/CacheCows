const express = require('express')
const router = express.Router()
const controlls=require('../controllers/countriesController')


router.get('/',controlls.getCountries);


module.exports = router  