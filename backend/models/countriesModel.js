const mongoose = require('mongoose')
const { float } = require('webidl-conversions')
const { serializeInteger } = require('whatwg-url')

const CountriesSchema = new mongoose.Schema({

     
     country_name:{type: String, required: [true, 'Please add a text value'],timestamps : true}
     
     

})

const countrymodel = mongoose.model("Countries",CountriesSchema )
module.exports=countrymodel