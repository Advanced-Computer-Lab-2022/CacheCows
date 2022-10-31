const Course = ({ course }) => {
    return (
        <article>
            <h2>{course.title}</h2>
            <p>{course.body}</p>
            <p>Course Name: {Course.course_name}</p>
        </article>
    )
}
export default Course