import { Container } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from "react";
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const CourseInfo = ({course}) => {


    return(
        
        <Container className="course-details" >
             <p>
            <p><strong>Course Map: </strong></p>
            
            <Popup  trigger={
            <p><h4>{course.course_subtopic1}</h4></p>}>
            <p className='Modal'>
            <iframe src={course.course_preview1} title="YouTube video" allowFullScreen></iframe>
            </p>
            </Popup>
            <p><h4>{course.course_subtopic2}</h4></p>
            <p onClick={<Popup><iframe src={course.course_preview2} title="YouTube video" allowFullScreen></iframe></Popup>}><h4>{course.course_subtopic3}</h4></p>
            <p>{course.course_subtopic4}</p>
            <p onClick={<Popup><iframe src={course.course_preview3} title="YouTube video" allowFullScreen></iframe></Popup>}><h4>{course.course_subtopic5}</h4></p>
            <p><h4>{course.course_subtopic6}</h4></p>
            <p><strong>Choose Subtitle: </strong></p>
             </p>
        </Container>
    )
}

export default CourseInfo