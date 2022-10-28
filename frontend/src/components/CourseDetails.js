const CourseDetails = ({course}) => {
    return(
        <div className="course-details" >
            <h4>{course.course_name}</h4>
            <p><strong>Course ID</strong>{course.course_id}</p>
            <p>{course.createdAt}</p>
        </div>
    )
}

export default CourseDetails