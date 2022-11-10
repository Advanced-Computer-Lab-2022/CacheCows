import { Container } from 'react-bootstrap'
import { useState } from "react";

const CourseDetails = ({course}) => {
    const [isShown, setIsShown] = useState(false);

    return(
        <Container onMouseOver={() => setIsShown(true)} onMouseOut={() => setIsShown(false)} className="course-details" >
            <div className="ratio ratio-16x9">
             <iframe src={course.course_preview} title="YouTube video" allowFullScreen></iframe>

            <h4>{course.course_name}</h4>
            <p><strong>Course ID: </strong>{course.course_id}</p>
            <p><strong>Course rating: </strong>{course.course_rating}</p>
            <p><strong>Course hours: </strong>{course.course_total_hours}</p>
            </div>

            {isShown && (
             <p><strong>Instructor Name: </strong>{course.instructor_name}
             <p>{course.createdAt}</p>
             </p>
             
             )}
        </Container>
    )
}

export default CourseDetails