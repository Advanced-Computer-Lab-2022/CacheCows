const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : false }))

app.use('/api/courses', require('./routes/courseRoutes'))
app.use('/api/guests', require('./routes/guestsRoutes'))
app.use('/api/admins', require('./routes/adminsRoutes'))
app.use('/api/instructors', require('./routes/instructorsRoutes'))
app.use('/api/corpTrainee',require('./routes/corporateTraineeRoutes'))
app.use('/api/indvtrainee',require('./routes/indvTraineeRoute'))
app.use('/api/reviews',require('./routes/reviewRoutes'))
app.use('/api/exams',require('./routes/examRoutes'))
app.use('/api/answers',require('./routes/answerRoutes'))

app.use(errorHandler)

app.listen ( port, () => console.log(`Server Started on Port ${port}` ))