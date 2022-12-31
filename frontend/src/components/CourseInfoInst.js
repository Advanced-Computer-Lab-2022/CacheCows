import { useEffect,useState } from "react";
import { Container } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useAuthContext } from '../hooks/useAuthContext'
import Notes from "../components/Notes";
import { CheckBox } from '@material-ui/icons';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';




const CourseInfoInst = ({course}) => {
    const [show, setShow] = useState(false);    
    const { user } = useAuthContext()

    const type = localStorage.getItem('type')
    const [exams, setExams] = useState();  

    const course_id = {course_id : course.course_id};
      
    

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(()=>{
    const fetchCourses=async ()=>{
        const response1= await fetch('api/exams/getCExams',{
            method: 'POST',
            body: JSON.stringify(course_id),
            headers: {
              'Content-Type' : 'application/json',
              'Authorization': `Bearer ${user.token}`},
          })
          const json1= await response1.json()
  
          if(response1.ok){
          setExams(json1)
          console.log("yess: ",json1,course_id)
          }
          if(!response1.ok){
            setExams('')
            console.log("WTF: ",json1)
            }
    }
    fetchCourses();
    
},[])


    return(
        <div>
        <Container className="reports" >
             <p>
            <header class='headerC'>
              
              <Popup 
              
              modal trigger={
            <p><h3>{course.course_name}</h3></p>}>
            <h4 class='header'>{course.course_name}</h4>
            <iframe className='modalx'  src={course.course_video} title="YouTube video" allowFullScreen></iframe>

              <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
            </FormGroup>
            
            </Popup></header>

            <br/>

            <Popup modal trigger={
            <p><h4>Exam 1</h4></p>}>
            <h4 class='header'>{}</h4>
            <iframe className='modalx'  src={course.course_preview1} title="YouTube video" allowFullScreen></iframe>
            
            

            <h4 class='header'>{course.course_description1}</h4>

            </Popup>

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

            <Popup modal trigger={
            <p><h4>{course.course_subtopic4}</h4></p>}>
            <h4 class='header'>{course.course_subtopic4}</h4>
            <iframe className='modalx'  src={course.course_preview4} title="YouTube video" allowFullScreen></iframe>
            <h4 class='header'>{course.course_description4}</h4>
            
            

            </Popup>

            <br/>

            <Popup modal trigger={
            <p><h4>{course.course_subtopic5}</h4></p>}>
            <h4 class='header'>{course.course_subtopic5}</h4>
            <iframe className='modalx'  src={course.course_preview5} title="YouTube video" allowFullScreen></iframe>
            <h4 class='header'>{course.course_description5}</h4>
            
            

            </Popup>

            <br/>

            <Popup modal trigger={
            <p><h4>{course.course_subtopic6}</h4></p>}>
            <h4 class='header'>{course.course_subtopic6}</h4>
            <iframe className='modalx'  src={course.course_preview6} title="YouTube video" allowFullScreen></iframe>
            <h4 class='header'>{course.course_description6}</h4>
            
            

            </Popup>
            <br/>
      
              </p>
        </Container>
        </div>
    )
}

export default CourseInfoInst