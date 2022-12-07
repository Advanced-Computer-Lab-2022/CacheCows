import { Container } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from "react";
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const CourseInfoGuest = ({course}) => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    return(
        <div>
        <Container className="course-details" >
             <p>
            <header class='headerC'><Popup modal trigger={
            <p><h4>{course.course_name}</h4></p>}>
            <h4 class='header'>{course.course_name}</h4> 
            <iframe className='modalx'  src={course.course_video} title="YouTube video" allowFullScreen></iframe>
            <h4 class='header'>{course.course_summary}</h4>
            </Popup></header>

            <br/>

            <Popup modal trigger={
            <p><h4>{course.course_subtopic1}</h4></p>}>
            <h4 class='header'>{course.course_subtopic1}</h4>
            <iframe className='modalx'  src={course.course_preview1} title="YouTube video" allowFullScreen></iframe>
            <h4 class='header'>{course.course_description1}</h4>
            </Popup>

            <br/>

            <Popup modal trigger={
            <p><h4>{course.course_subtopic2}</h4></p>}>
            <h4 class='header'>{course.course_subtopic2}</h4>
            <iframe className='modalx'  src={course.course_preview2} title="YouTube video" allowFullScreen></iframe>
            <h4 class='header'>{course.course_description2}</h4>
            </Popup>

            <br/>

            <Popup modal trigger={
            <p><h4>{course.course_subtopic3}</h4></p>}>
            <h4 class='header'>{course.course_subtopic3}</h4>
            <iframe className='modalx'  src={course.course_preview3} title="YouTube video" allowFullScreen></iframe>
            <h4 class='header'>{course.course_description3}</h4>
            </Popup>

            <br/>

            <p><h4>{course.course_subtopic4}</h4></p>

            <br/>

            <p><h4>{course.course_subtopic5}</h4></p>

            <br/>

            <p><h4>{course.course_subtopic6}</h4></p>
        </p>
        </Container>
        </div>
    )
}

export default CourseInfoGuest