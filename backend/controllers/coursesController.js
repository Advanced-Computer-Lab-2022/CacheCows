const asyncHandler = require('express-async-handler')

const courses = require('../models/coursesModel')

//////////////////////////////////////////////////////////////////////////
//GET ALL COURSES
const getCourses = asyncHandler(async (req, res) => {

    const allcourses = await courses.find()
    res.status(200).json(allcourses)
})
//GET ONE COURSE
const getCourse =  asyncHandler(async (req, res) => {
    
    const course = await courses.find({course_name: req.body.course_name})
    if (course.toString() === ""){
        res.status(400)
        throw new Error ('course not found')
    }
     res.status(200).json({course})
     
})
//ADD COURSE
const setCourse = asyncHandler(async(req, res) => {
    if (!req.body.course_name){
        res.status(400)
        throw new Error('Please add a text field')
    }

    const course = await courses.create({
     course_id : req.body.course_id,
     course_name : req.body.course_name,
     instructor_name : req.body.instructor_name,
     instructor_id : req.body.instructor_id,
     course_rating : req.body.course_rating,
     course_discount : req.body.course_discount,
     course_price : req.body.course_price,  
     course_summary : req.body.course_summary,
     course_total_hours : req.body.course_total_hours,  
     course_subject : req.body.course_subject,
     course_exercise : req.body.course_exercise,
     course_outline : req.body.course_outline,
     course_video : req.body.course_video,
     course_preview : req.body.course_preview,
     course_subtitles : req.body.course_subtitles
     
    })
    res.status(200).json(course)
})
//UPDATE COURSE
const updateCourse = asyncHandler(async (req, res) => {
    
    const course = await courses.find({_id: req.body._id})
    
    if (course.toString() === ""){
        res.status(400)
        throw new Error ('course not found')
    }
    const updatedcourse = await courses.findByIdAndUpdate({_id: req.body._id}, req.body ,{
        new : true,
    })
    res.status(200).json(updatedcourse)
})
//DELETE COURSE
const deleteCourse =  asyncHandler(async (req, res) => {
    
    const course = await courses.find({course_name: req.body.course_name})
    if (course.toString() === ""){
        res.status(400)
        throw new Error ('course not found')
    }
     await courses.deleteOne({course_name: req.body.course_name})
     res.status(200).json({course})
     
})
//////////////////////////////////////////////////////////////////////////
//FUNCTIONALITIES
//////////////////////////////////////////////////////////////////////////
//VIEW SPECIFIC COURSE PRICE
const viewCoursePrice =  asyncHandler(async (req, res) => {
    
    const course = await courses.find({course_id : req.body.course_id})
        if (course.toString() === ""){
            res.status(400)
            throw new Error ('course not found')
        }
            res.status(200).send(course.course_price)
             
})
//VIEW COURSE WITH TITLE/TOTAL HOURS/RATING
const viewCourses =  asyncHandler(async (req, res) => {
    
    const course = await courses.find()
     if (course.toString() === ""){
         res.status(400)
        throw new Error ('course not found')
    }
        res.status(200).send(course.course_name,course.course_total_hours,course.course_rating)
         
})
//GET SPECIFIC COURSE PREVIEW    
const previewCourses = asyncHandler(async (req, res) => {

    const course = await courses.findById(req.params._id)
        if (!course){
            res.status(400)
            throw new Error ('courses not found')
        }
    
       res.status(200).json({preview : req.params.preview })

})
//GET SPECIFIC COURSE DATA   
const CourseData = asyncHandler(async (req, res) => {

    const course = await courses.findById(req.params._id)
        if (!course){
            res.status(400)
            throw new Error ('courses not found')
        }
    
       res.status(200).json({
        course_subtitles : req.body.course_subtitles,
        course_exercise : req.body.course_exercise,
        preview : req.params.preview,
        })

})
//////////////////////////////////////////////////////////////////////////
//FILTERS
/////////////////////////////////////////////////////////////////////////
//FILTER BY SUBJECT OR RATING
const filterCourseBySubjectOrRating = asyncHandler(async (req, res) => {

    const subj = req.body.course_subject;
    const rating = req.body.course_rating;
        if(!rating){
            const course = await courses.find({course_subject : req.body.course_subject})
                if (!course){
                    res.status(400)
                    throw new Error ('No Courses Matches Search!')
                }
            res.status(200).json(course)
            }if(!subj){
                const course = await courses.find({course_rating : req.body.course_rating})
                if (!course){
                    res.status(400)
                    throw new Error ('No Courses Matches Search!')
                }
            res.status(200).json(course)
        }else {
            const course = await courses.find({course_subject : req.body.course_subject,course_rating: req.body.course_rating})
            res.status(200).json(course)
        }
})
//FILTER BY PRICE         
const filterCourseByPrice = asyncHandler(async (req, res) => {

    const course = await courses.findById({course_price : req.body.course_price})
        if (!course){
            res.status(400)
            throw new Error ('No Courses Matches Search!')
        }
                
            res.status(200).json(course)
            
})   
//////////////////////////////////////////////////////////////////////////
//INST SEARCH AND FILTER
/////////////////////////////////////////////////////////////////////////                
//INST SEARCHES OWN COURSES BY TITLE       
const SearchInstCourseTitle = asyncHandler(async (req, res) => {

    const course = await courses.find({course_name : req.body.course_name, instructor_id : req.body.instructor_id })
        if (!course){
            res.status(400)
            throw new Error ('No Courses Matches Search!')
        }
            res.status(200).json(course)
})
//INST SEARCHES OWN COURSES BY SUBJECT
const SearchInstCourseSubject = asyncHandler(async (req, res) => {

    const course = await courses.find({course_subject : req.body.course_subject, instructor_id : req.body.instructor_id })
        if (!course){
            res.status(400)
            throw new Error ('No Courses Matches Search!')
        }
            res.status(200).json(course)
})
//INST SEARCHES OWN COURSES BY INST
const SearchCourseInstructor = asyncHandler(async (req, res) => {

    const course = await courses.find({instructor_name : req.body.instructor_name, instructor_id : req.body.instructor_id })
        if (!course){
            res.status(400)
            throw new Error ('No Courses Matches Search!')
        }
            res.status(200).json(course)
})
//GET INST COURSES
const findInstCourse = asyncHandler(async(req,res)=> {

    const course = await courses.find({instructor_id: req.body.instructor_id})
        if (!course){
            res.status(400)
            throw new Error ('No Courses Uploaded Yet!')
        }
            
            res.status(200).json(course)
        
})
//FILTER INST COURSES BY PRICE OR SUBJ
const filterInstCourse = asyncHandler(async (req, res) => {

    const subj = req.body.course_subject;
    const price = req.body.course_price;
        if(!subj){
            const course = await courses.find({course_subject : req.body.course_subject})
                if (!course){
                    res.status(400)
                    throw new Error ('No Courses Matches Search!')
                }
            res.status(200).json(course)
            }if(!price){
                const course = await courses.find({course_price : req.body.course_price})
                if (!course){
                    res.status(400)
                    throw new Error ('No Courses Matches Search!')
                }
            res.status(200).json(course)
        }
})  
//////////////////////////////////////////////////////////////////////////
//USER SEARCH
///////////////////////////////////////////////////////////////////////// 
//SEARCH COURSES BY SUBJECT OR TITLE OR INST
const SearchCourseByOpt = asyncHandler(async (req, res) => {

    const subj = req.body.course_subject;
    const title = req.body.course_rating;
    const inst = req.body.instructor_name;
        if(!subj){
            const course = await courses.find({course_subject : req.body.course_subject})
                if (!course){
                    res.status(400)
                    throw new Error ('No Courses Matches Search!')
                }
            res.status(200).json(course)
            }if(!title){
                const course = await courses.find({course_name : req.body.course_name})
                if (!course){
                    res.status(400)
                    throw new Error ('No Courses Matches Search!')
                }
            res.status(200).json(course)
            }if(!inst){
                const course = await courses.find({instructor_name : req.body.instructor_name})
                if (!course){
                    res.status(400)
                    throw new Error ('No Courses Matches Search!')
                }
            res.status(200).json(course)
        }
})





module.exports = {
    getCourses,
    getCourse,
    setCourse,
    updateCourse,
    deleteCourse,
    previewCourses,
    SearchCourseByOpt,  
    SearchInstCourseTitle,
    SearchInstCourseSubject,
    SearchCourseInstructor,
    findInstCourse,
    filterCourseByPrice,
    filterCourseBySubjectOrRating,
    viewCoursePrice,
    viewCourses,
    filterInstCourse

}


