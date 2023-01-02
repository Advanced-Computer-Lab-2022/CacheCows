import { useEffect,useState } from "react";
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
import Container from '@mui/material/Container';
import ExamQs from './ExamQs';




const CourseInfo = ({course}) => {
  const params = new URLSearchParams(window.location.search);
  const week = params.get('week');

    const [show, setShow] = useState(false);    
    const { user } = useAuthContext()

    const type = localStorage.getItem('type')
    const [exams, setExams] = useState();  

    const course_id = {course_id : course.course_id};
      
    

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



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
            <iframe className=''  src={course.course_video} title="YouTube video" allowFullScreen></iframe>
            </div>
            <br/><br/>
            <h4 class='header'>{course.course_summary}</h4>
                          <FormGroup>
              <FormControlLabel sx={{marginLeft : 45, color:'#a6607c'}}control={<Checkbox defaultChecked />}   label= "Finished" />
              </FormGroup>
              <Notes/>
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
              <FormGroup>
              <FormControlLabel sx={{marginLeft : 45, color:'#a6607c'}}control={<Checkbox defaultChecked />}   label= "Finished" />
              </FormGroup>
              <Notes/>
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
              <FormGroup>
              <FormControlLabel sx={{marginLeft : 45, color:'#a6607c'}}control={<Checkbox defaultChecked />}   label= "Finished" />
              </FormGroup>
              <Notes/>
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
              <FormGroup>
              <FormControlLabel sx={{marginLeft : 45, color:'#a6607c'}}control={<Checkbox defaultChecked />}   label= "Finished" />
              </FormGroup>
              <Notes/>
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
              <FormGroup>
              <FormControlLabel sx={{marginLeft : 45, color:'#a6607c'}}control={<Checkbox defaultChecked />}   label= "Finished" />
              </FormGroup>
              <Notes/>
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
              <FormGroup>
              <FormControlLabel sx={{marginLeft : 45, color:'#a6607c'}}control={<Checkbox defaultChecked />}   label= "Finished" />
              </FormGroup>
              <Notes/>
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
              <FormGroup>
              <FormControlLabel sx={{marginLeft : 45, color:'#a6607c'}}control={<Checkbox defaultChecked />}   label= "Finished" />
              </FormGroup>
              <Notes/>
              </Box>
            ):(<div></div>)}
        </Container>
        </div>
    )
}

export default CourseInfo