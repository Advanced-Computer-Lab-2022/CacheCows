const CoursepriceDetails = ({course}) => {
    return(
        <div className="course-details" >
            <h4>{course.course_name}</h4>
            <p><strong>Course Price</strong>{course.course_price}</p>
            
            <p>{course.createdAt}</p>
        </div>
    )
}

export default CoursepriceDetails