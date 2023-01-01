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
import { Box } from '@mui/material';



const CourseInfoInst = ({course}) => {
  const params = new URLSearchParams(window.location.search);
  const week = params.get('week');

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
    
},[course_id,user.token])


    return(
<div>
          < br/>
          < br/>
          < br/>
        <Container className="reports" sx={{width : 900}} >
              {week === '1'?(
                <Box>
            <h4 class='header1'>{course.course_name}</h4>
            <br/>
            <div className="ratio ratio-16x9">
            <iframe className='modalx'  src={course.course_video} title="YouTube video" allowFullScreen></iframe>
            </div>
            <br/><br/>
            <h4 class='header'>{course.course_summary}</h4>
            </Box>
            ): week === '2'?(
              <Box>
              <h4 class='header1'>{course.course_subtopic1}</h4>
              <br/>
              <div className="ratio ratio-16x9">
              <iframe className='modalx'  src={course.course_preview1} title="YouTube video" allowFullScreen></iframe>
              </div>
              <br/><br/>

              <h4 class='header'>{course.course_description1}</h4>
              </Box>

            ): week === '3'?(
              <Box>
              <h4 class='header1'>{course.course_subtopic2}</h4>
              <br/>
            <div className="ratio ratio-16x9">
              <iframe className='modalx'  src={course.course_preview2} title="YouTube video" allowFullScreen></iframe>
              </div>
              <br/><br/>

              <h4 class='header'>{course.course_description2}</h4>
              </Box>
            ): week === '4'?(
              <Box>
              <h4 class='header1'>{course.course_subtopic3}</h4>
              <br/>
            <div className="ratio ratio-16x9">
              <iframe className='modalx'  src={course.course_preview3} title="YouTube video" allowFullScreen></iframe>
              </div>
              <br/><br/>

              <h4 class='header'>{course.course_description3}</h4>
              </Box>
            ): week === '5'?(
              <Box>
              <h4 class='header1'>{course.course_subtopic4}</h4>
              <br/>
            <div className="ratio ratio-16x9">
              <iframe className='modalx'  src={course.course_preview4} title="YouTube video" allowFullScreen></iframe>
              </div>
              <br/><br/>

              <h4 class='header'>{course.course_description4}</h4>
              </Box>
            ): week === '6'?(
              <Box>
              <h4 class='header1'>{course.course_subtopic5}</h4>
              <br/>
            <div className="ratio ratio-16x9">
              <iframe className='modalx'  src={course.course_preview5} title="YouTube video" allowFullScreen></iframe>
              </div>
              <br/><br/>

              <h4 class='header'>{course.course_description5}</h4>
              </Box>
            ): week === '7'?(
              <Box>
              <h4 class='header1'>{course.course_subtopic6}</h4>
              <br/>
              <div className="ratio ratio-16x9">
              <iframe className='modalx'  src={course.course_preview6} title="YouTube video" allowFullScreen></iframe>
              </div>
              <br/><br/>

              <h4 class='header'>{course.course_description6}</h4>
              </Box>
            ):(<div>xxx</div>)}
        </Container>
        </div>
    )
}

export default CourseInfoInst