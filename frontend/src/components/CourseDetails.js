import { Container } from 'react-bootstrap'
import { useState } from "react";

const CourseDetails = ({course}) => {
    const [isShown, setIsShown] = useState(false);
    const [prv1, setprv1] = useState(true);
    const [prv2, setprv2] = useState(false);
    const [prv3, setprv3] = useState(false);

    function sub1() {
        setprv1(true) 
        setprv2(false) 
        setprv3(false)
      }

      function sub2() {
        setprv1(false) 
        setprv2(true) 
        setprv3(false)
      }

      function sub3() {
        setprv1(false) 
        setprv2(false) 
        setprv3(true)
      }

    return(
        <Container onMouseOver={() => setIsShown(true)} onMouseOut={() => setIsShown(false)} className="course-details" >
            <div className="ratio ratio-16x9">
                {prv1 && (<iframe src={course.course_preview1} title="YouTube video" allowFullScreen></iframe>)}
                {prv2 && (<iframe src={course.course_preview2} title="YouTube video" allowFullScreen></iframe>)}
                {prv3 && (<iframe src={course.course_preview3} title="YouTube video" allowFullScreen></iframe>)}
            <h4>{course.course_name}</h4>
            <p><strong>Course ID: </strong>{course.course_id}</p>
            <p><strong>Course rating: </strong>{course.course_rating}</p>
            <p><strong>Course hours: </strong>{course.course_total_hours}</p>
            </div>

            {isShown && (
             <p>
            <p><strong>Instructor Name: </strong>{course.instructor_name}</p>
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

export default CourseDetails