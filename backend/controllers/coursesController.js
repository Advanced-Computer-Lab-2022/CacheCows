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
    
    const course = await courses.find({course_id: req.body.course_id})
    if (course.toString() === ""){
        res.status(400).json({error: 'course not found'})
    }
     res.status(200).json(course)
     
})

const getInstCourses =  asyncHandler(async (req, res) => {
    
    const course = await courses.find({instructor_id: req.body.instructor_id})
    if (course.toString() === ""){
        res.status(400).json({error: 'courses not found'})
    }
     res.status(200).json(course)
     
})


//ADD COURSE
const setCourse = asyncHandler(async(req, res) => {
    if (req.body.course_id == ""){
        res.status(400).json({error: "Please add an ID"})
        throw new Error('Please add a text field')
    }
    const checkcourses = await courses.findOne({ course_id: req.body.course_id })
  
    if (checkcourses) {
      res.status(400)
      throw new Error('Course already exists')
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
     course_preview1 : req.body.course_preview1,
     course_preview2 : req.body.course_preview2,
     course_preview3 : req.body.course_preview3,
     course_subtitles1 : req.body.course_subtitles1,
     course_subtitles2 : req.body.course_subtitles2,
     course_subtitles3 : req.body.course_subtitles3,
     course_description1 : req.body.course_description1,
     course_description2 : req.body.course_description2,
     course_description3 : req.body.course_description3,
     course_subtopic1 : req.body.course_subtopic1,
     course_subtopic2 : req.body.course_subtopic1,
     course_subtopic3 : req.body.course_subtopic1,
     course_subtopic4 : req.body.course_subtopic1,
     course_subtopic5 : req.body.course_subtopic1,
     course_subtopic6 : req.body.course_subtopic1,
     course_total_no_ratings:0,
     course_total_ratings:0,
     course_rating:0
     
    })
    res.status(200).json({course})
})
//UPDATE COURSE
const updateCourse = asyncHandler(async (req, res) => {
    
    const course = await courses.find({course_id : req.body.course_id})
    
    if (course.toString() === ""){
        res.status(400)
        throw new Error ('course not found')
    }
    const updatedcourse = await courses.findOneAndUpdate({course_id : req.body.course_id}, req.body ,{
        new : true,
    })
    res.status(200).json(updatedcourse)
})
//DELETE COURSE
const deleteCourse =  asyncHandler(async (req, res) => {
    
    const course = await courses.find({course_id: req.body.course_id})
    if (course.toString() === ""){
        res.status(400)
        throw new Error ('course not found')
    }
     await courses.deleteOne({course_id: req.body.course_id})
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
    
       res.status(200).json({preview1 : req.params.preview1 })

})
//GET SPECIFIC COURSE DATA   
const CourseData = asyncHandler(async (req, res) => {

    const course = await courses.findById(req.params._id)
        if (!course){
            res.status(400)
            throw new Error ('courses not found')
        }
    
       res.status(200).json({
        course_subtitles1 : req.body.course_subtitles1,
        course_subtitles2 : req.body.course_subtitles2,
        course_subtitles3 : req.body.course_subtitles3,
        course_exercise : req.body.course_exercise,
        course_preview1 : req.params.course_preview1,
        course_preview2 : req.body.course_preview2,
        course_preview3 : req.body.course_preview3,
        })

})
//////////////////////////////////////////////////////////////////////////
//FILTERS
/////////////////////////////////////////////////////////////////////////
//FILTER BY SUBJECT OR RATING
const filterCourseBySubjectOrRating = asyncHandler(async (req, res) => {
    const rating = req.body.course_rating;
    const subj = req.body.course_subject;
        if(!rating && subj){
            const courseR = await courses.find({course_subject : req.body.course_subject})
                if (courseR.toString() === ""){
                    res.status(400).json({error: 'No Courses Matches Filter'})
                }
            res.status(200).json(courseR)
            }if(!subj && rating){
                const courseF = await courses.find({course_rating : req.body.course_rating})
                if (courseF.toString() === ''){
                    res.status(400).json({error: 'No Courses Matches Filter'})
                }
            res.status(200).json(courseF)
        }else {
            const course = await courses.find({course_subject : req.body.course_subject,course_rating: req.body.course_rating})
            if (course.toString() === ''){
                res.status(400).json({error: 'No Courses Matches Filter'})
            }
            res.status(200).json(course)
        }
})

//FILTER BY SUBJECT OR RATING inst
const filterCourseBySubjectOrRatingInst = asyncHandler(async (req, res) => {
    const rating = req.body.course_rating;
    const subj = req.body.course_subject;
    const instcrs = await courses.find({instructor_id : req.body.instructor_id})
        if(!rating && subj){
            const courseR = await courses.find({instructor_id : req.body.instructor_id}).find({course_subject : req.body.course_subject})
                if (courseR.toString() === ""){
                    res.status(400).json({error: 'No Courses Matches Filter'})
                }
            res.status(200).json(courseR)
            }if(!subj && rating){
                const courseF = await courses.find({instructor_id : req.body.instructor_id}).find({course_rating : req.body.course_rating})
                if (courseF.toString() === ''){
                    res.status(400).json({error: 'No Courses Matches Filter'})
                }
            res.status(200).json(courseF)
        }else {
            const course = await courses.find({instructor_id : req.body.instructor_id}).find({course_subject : req.body.course_subject,course_rating: req.body.course_rating})
            if (course.toString() === ''){
                res.status(400).json({error: 'No Courses Matches Filter'})
            }
            res.status(200).json(course)
        }
})
//FILTER BY PRICE         
const filterCourseByPrice = asyncHandler(async (req, res) => {

    const max = req.body.course_price
    const course = await courses.find().where("course_price").lte(max).exec()
        if (course.toString() === ""){
            res.status(400).json({error: 'No Courses Matches Filter'})
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
                    res.status(400).json({error: 'No Courses Matches Filter'})
                }
            res.status(200).json(course)
            }if(!price){
                const course = await courses.find({course_price : req.body.course_price})
                if (!course){
                    res.status(400).json({error: 'No Courses Matches Filter'})
                }
            res.status(200).json(course)
        }
})  
//////////////////////////////////////////////////////////////////////////
//USER SEARCH
///////////////////////////////////////////////////////////////////////// 
//SEARCH COURSES BY SUBJECT OR TITLE OR INST
const SearchCourseByOpt = asyncHandler(async (req, res) => {

    const course1 = await courses.find({course_subject : req.body.text})
    const course2 = await courses.find({course_name : req.body.text})
    const course3 = await courses.find({instructor_name : req.body.text})
    if (course1.toString() === "" && course2.toString() === "" && course3.toString() === ""){
        res.status(400).json({error: 'No Courses Matches Search!' })
    }
    if(course1.toString() != ""){
        res.status(200).json(course1)
    } else if(course2.toString() != ""){
        res.status(200).json(course2)
    }else if(course3.toString() != ""){ 
        res.status(200).json(course3)
    }
})

//SEARCH COURSES BY SUBJECT OR TITLE OR INST
const SearchCourseByOptInst = asyncHandler(async (req, res) => {

    const course1 = await courses.find({instructor_id : req.body.instructor_id}).find({course_subject : req.body.text})
    const course2 = await courses.find({instructor_id : req.body.instructor_id}).find({course_name : req.body.text})
    const course3 = await courses.find({instructor_id : req.body.instructor_id}).find({instructor_name : req.body.text})
    if (course1.toString() === "" && course2.toString() === "" && course3.toString() === ""){
        res.status(400).json({error: 'No Courses Matches Search!' })
    }
    if(course1.toString() != ""){
        res.status(200).json(course1)
    } else if(course2.toString() != ""){
        res.status(200).json(course2)
    }else if(course3.toString() != ""){ 
        res.status(200).json(course3)
    }
}) 
const rating=async(req,res)=>{
    try{
        const course_id=req.query.userId
    const course=await courses.findById(course_id)
       var total_rating=course.course_total_ratings
      // console.log(course)
      
      var  total_no_rate=course.course_total_no_ratings
    total_rating+=parseInt(req.body.course_rating)
    console.log(total_rating)
    total_no_rate+=1
    var total_rate=(total_rating/(total_no_rate*5))*5
    console.log(total_no_rate)
    await courses.findByIdAndUpdate(course_id,{course_rating:total_rate,course_total_ratings:total_rate,course_total_no_ratings:total_no_rate},{new:true})
    res.status(200).json('rating added ')
    }
    catch(error){s
      res.status(400).json({error:error.message})
    }
}





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
    filterInstCourse,
    CourseData,
    rating,
    getInstCourses,
    filterCourseBySubjectOrRatingInst,
    SearchCourseByOptInst

}


