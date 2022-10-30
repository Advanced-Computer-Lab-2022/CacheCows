const CourseDetails = ({course}) => {
    return(
        <div className="course-details" >
            <h4>{course.course_name}</h4>
            <p><strong>Course ID</strong>{course._id}</p>
            <p><strong>Course rating</strong>{course.course_rating}</p>
            <p><strong>Course hours</strong>{course.course_total_hours}</p>
            <p>{course.createdAt}</p>
        </div>
    )
}

export default CourseDetails