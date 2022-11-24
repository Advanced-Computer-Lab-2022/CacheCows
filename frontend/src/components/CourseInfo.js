import { Container } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from "react";
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const CourseInfo = ({course}) => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    return(
        <div>
            <Nav defaultActiveKey="/home" as="ul">
            <Nav.Item as="li">
            <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            </Nav>
        <Container className="course-details" >
             <p>
            <header><strong>Course Map: </strong></header>
            <Popup modal trigger={
            <p><h4>{course.course_subtopic1}</h4></p>}>
            <h4 class='header'>{course.course_subtopic1}</h4>
            <iframe className='modalx'  src={course.course_preview1} title="YouTube video" allowFullScreen></iframe>
            </Popup>

            <p><h4>{course.course_subtopic2}</h4></p>

            <Popup modal trigger={
            <p><h4>{course.course_subtopic3}</h4></p>}>
            <h4 class='header'>{course.course_subtopic3}</h4>
            <iframe className='modalx'  src={course.course_preview2} title="YouTube video" allowFullScreen></iframe>
            </Popup>

            <p><h4>{course.course_subtopic4}</h4></p>

            <Popup modal trigger={
            <p><h4>{course.course_subtopic5}</h4></p>}>
            <h4 class='header'>{course.course_subtopic3}</h4>
            <iframe className='modalx'  src={course.course_preview3} title="YouTube video" allowFullScreen></iframe>
            </Popup>

            <p><h4>{course.course_subtopic6}</h4></p>
        </p>
        </Container>
        </div>
    )
}

export default CourseInfo