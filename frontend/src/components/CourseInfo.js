import { Container } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from "react";
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useAuthContext } from '../hooks/useAuthContext'
import Notes from "../components/Notes";



const CourseInfo = ({course}) => {
    const [show, setShow] = useState(false);    
    const { user } = useAuthContext()

    

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    return(
        <div>
        <Container className="course-details" >
             <p>
            <header class='headerC'>
              
              <Popup 
              
              modal trigger={
            <p><h4>{course.course_name}</h4></p>}>
            <h4 class='header'>{course.course_name}</h4>
            <iframe className='modalx'  src={course.course_video} title="YouTube video" allowFullScreen></iframe>
            <h4 class='header'>{course.course_summary}</h4>
            <Notes/>
            </Popup></header>

            <br/>

            <Popup modal trigger={
            <p><h4>{course.course_subtopic1}</h4></p>}>
            <h4 class='header'>{course.course_subtopic1}</h4>
            <iframe className='modalx'  src={course.course_preview1} title="YouTube video" allowFullScreen></iframe>
            <Notes/>

            <h4 class='header'>{course.course_description1}</h4>

            </Popup>

            <br/>

            <Popup modal trigger={
            <p><h4>{course.course_subtopic2}</h4></p>}>
            <h4 class='header'>{course.course_subtopic2}</h4>
            <iframe className='modalx'  src={course.course_preview2} title="YouTube video" allowFullScreen></iframe>
            <h4 class='header'>{course.course_description2}</h4>
            <Notes/>

            </Popup>

            <br/>

            <Popup modal trigger={
            <p><h4>{course.course_subtopic3}</h4></p>}>
            <h4 class='header'>{course.course_subtopic3}</h4>
            <iframe className='modalx'  src={course.course_preview3} title="YouTube video" allowFullScreen></iframe>
            <h4 class='header'>{course.course_description3}</h4>
            <Notes/>

            </Popup>

            <br/>

            <Popup modal trigger={
            <p><h4>{course.course_subtopic4}</h4></p>}>
            <h4 class='header'>{course.course_subtopic4}</h4>
            <iframe className='modalx'  src={course.course_preview4} title="YouTube video" allowFullScreen></iframe>
            <h4 class='header'>{course.course_description4}</h4>
            <Notes/>

            </Popup>

            <br/>

            <Popup modal trigger={
            <p><h4>{course.course_subtopic5}</h4></p>}>
            <h4 class='header'>{course.course_subtopic5}</h4>
            <iframe className='modalx'  src={course.course_preview5} title="YouTube video" allowFullScreen></iframe>
            <h4 class='header'>{course.course_description5}</h4>
            <Notes/>

            </Popup>

            <br/>

            <Popup modal trigger={
            <p><h4>{course.course_subtopic6}</h4></p>}>
            <h4 class='header'>{course.course_subtopic6}</h4>
            <iframe className='modalx'  src={course.course_preview6} title="YouTube video" allowFullScreen></iframe>
            <h4 class='header'>{course.course_description6}</h4>
            <Notes/>

            </Popup>
            <br/>

            <button onClick={() => window.location.href=`/TraineeResults?course_id=${course.course_id}&username=${user.name}`}
             >My results
            </button>
      
              </p>
        </Container>
        </div>
    )
}

export default CourseInfo