const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const user = require('../models/individualTraineeModel')


const protect = async (req, res, next) => {
  // verify user is authenticated
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).json({error: 'Authorization token required'})
  }

  const token = authorization.split(' ')[1]

  try {
    const { _id } = jwt.verify(token, process.env.JWT_SECRET)
    console.log(_id)
    // const user_admin = await user.findOne({ _id : _id})
    // const {type_t} = user_admin.type
    
    // console.log(type_t)
    
      const u = await user.findOne({ _id:_id })
      if(u!==null){
        
      console.log(u)
      next()
    }else{
      console.log(error)
      res.status(401).json({error: 'Access Denied'})
      }
      
    next()

  } catch (error) {
    console.log(error)
    res.status(401).json({error: 'Request is not authorized'})
  }
}


module.exports = { protect }