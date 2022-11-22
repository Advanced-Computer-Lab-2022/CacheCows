import { Container } from 'react-bootstrap'
import { useState } from "react";
import PopUp from './PopUp';

const CourseInfo = ({course}) => {
    const [isShown, setIsShown] = useState(false);
    const [sub1, setsub1] = useState(true);
    const [sub2, setsub2] = useState(false);
    const [sub3, setsub3] = useState(false);
    const [disc1, setDisc1] = useState(true);
    const [disc2, setDisc2] = useState(false);
    const [disc3, setDisc3] = useState(false);


    return(
        <Container className="course-details" >
            <p><h4>{course.course_name}</h4></p>
            <p><strong>Course ID: </strong>{course.course_id}</p>
            <p><strong>Course rating: </strong>{course.course_rating}</p>
            <p><strong>Course hours: </strong>{course.course_total_hours}</p>

            {isShown && (
             <p>
            <p><strong>Instructor Name: </strong>{course.instructor_name}</p>
            {disc1 && (<p><strong>Course Description: </strong>{course.course_description1}</p>)}
            {disc2 && (<p><strong>Course Description: </strong>{course.course_description2}</p>)}
            {disc3 && (<p><strong>Course Description: </strong>{course.course_description3}</p>)}
            <p><strong>Choose Subtitle: </strong></p>
            <button onClick={sub1}>{course.course_subtitles1}</button>
            <button onClick={sub2}>{course.course_subtitles2}</button>
            <button onClick={sub3}>{course.course_subtitles3}</button>
             <p>{course.createdAt}</p>
             </p>
             
             )}
        </Container>
    )
}

export default CourseInfo