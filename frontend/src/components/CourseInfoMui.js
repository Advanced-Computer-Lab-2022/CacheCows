import { useEffect,useState } from "react";
import { Container } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Button from '@mui/material/Button';
import Modal from 'react-bootstrap/Modal';
import { useAuthContext } from '../hooks/useAuthContext'
import Notes from "../components/Notes";
import { CheckBox } from '@material-ui/icons';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {
    Drawer,
    ListItem,
    ListItemIcon,
    ListItemText,
    
  } from "@material-ui/core";
  import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
  import {
    CheckBoxOutlineBlankOutlined,
    DraftsOutlined,
    HomeOutlined,
    InboxOutlined,
    MailOutline,
    ReceiptOutlined,
  } from "@material-ui/icons";
  


const CourseInfoMui = ({course}) => {
    const params = new URLSearchParams(window.location.search);
    const course_id = params.get('course_id');
    const crs = {course_id : course_id}

    const [show, setShow] = useState(false);    
    const { user } = useAuthContext()


    const [open, setOpen] = useState(false);

    const type = localStorage.getItem('type')
    const [exams, setExams] = useState();  
      
    

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(()=>{
    const fetchCourses=async ()=>{
        const response1= await fetch('api/exams/getCExams',{
            method: 'POST',
            body: JSON.stringify(crs),
            headers: {
              'Content-Type' : 'application/json'},
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
    
},[course_id])

  
    const getList = () => (
      <div style={{ width: 250 ,color: '#a6607c' }} onClick={() => setOpen(false)}>
        <br/>
          {course.course_name && (
          <div>
          <ListItem   button >
            <ListItemText  primary={course.course_name} onClick={() => window.location.href=`/CoursePagePreview?course_id=${course.course_id}&week=${1}`}/>
          </ListItem>
          < h6 className='h7'>___________________________</ h6>
          </div>
          )}

          {course.course_subtopic1 && (
          <div>
          <ListItem button >
            <ListItemText primary={course.course_subtopic1} onClick={() => window.location.href=`/CoursePagePreview?course_id=${course.course_id}&week=${2}`}/>
          </ListItem>

          < h6 className='h7'>___________________________</ h6>
          </div>
          )}

          <ListItem button >
            <ListItemText primary="Exam 1" onClick={() => window.location.href=`/CoursePage?course_id=${course.course_id}&week=${8}`}/>
          </ListItem>

          < h6 className='h7'>___________________________</ h6>

          {course.course_subtopic2 && (
          <div>
          <ListItem button >
            <ListItemText primary={course.course_subtopic2} onClick={() => window.location.href=`/CoursePagePreview?course_id=${course.course_id}&week=${3}`}/>
          </ListItem>

          < h6 className='h7'>___________________________</ h6>
          </div>
          )}

          {course.course_subtopic3 && (
          <div>
          <ListItem button >
            <ListItemText primary={course.course_subtopic3} onClick={() => window.location.href=`/CoursePagePreview?course_id=${course.course_id}&week=${4}`}/>
          </ListItem>

          < h6 className='h7'>___________________________</ h6>
          </div>
          )}

          <ListItem button >
            <ListItemText primary="Exam 2" onClick={() => window.location.href=`/CoursePage?course_id=${course.course_id}&week=${9}`}/>
          </ListItem>

          < h6 className='h7'>___________________________</ h6>

          {course.course_subtopic4 && (
          <div>
          <ListItem button >
            <ListItemText primary={course.course_subtopic4} onClick={() => window.location.href=`/CoursePagePreview?course_id=${course.course_id}&week=${5}`}/>
          </ListItem>

          < h6 className='h7'>___________________________</ h6>
          </div>
          )}

          {course.course_subtopic5 && (
            <div>
          <ListItem button >
            <ListItemText primary={course.course_subtopic5} onClick={() => window.location.href=`/CoursePagePreview?course_id=${course.course_id}&week=${6}`}/>
          </ListItem>

          < h6 className='h7'>___________________________</ h6>
          </div>
          )}

          <ListItem button >
            <ListItemText primary="Exam 3" onClick={() => window.location.href=`/CoursePage?course_id=${course.course_id}&week=${10}`}/>
          </ListItem>

          < h6 className='h7'>___________________________</ h6>

          {course.course_subtopic6 && (
          <div>
            <ListItem button >
            <ListItemText primary={course.course_subtopic6} onClick={() => window.location.href=`/CoursePagePreview?course_id=${course.course_id}&week=${7}`}/>
          </ListItem>
          < h6 className='h7'>___________________________</ h6>
          </div>
          )}

          <ListItem button >
            <ListItemText primary="Exam 4" onClick={() => window.location.href=`/CoursePage?course_id=${course.course_id}&week=${11}`}/>
          </ListItem>

          < h6 className='h7'>___________________________</ h6>

          <ListItem  button >
            <ListItemText sx = {{marginLeft : 5}} primary="My Results" onClick={() => window.location.href=`/TraineeResults?course_id=${course.course_id}&username=${user.username}`}/>
          </ListItem>
          
      </div>
    );
    return (
      <div>
        < h7>  {course.course_name} </ h7>

        <Button sx = {{color : '#fff', marginRight : 150, borderBlockColor: '#a6607c', backgroundColor:'#a6607c' }} onClick={() => setOpen(true)}> <FormatListBulletedIcon sx={{ marginBottom : 0 , marginRight : 1 , color : '#fff' }} ></FormatListBulletedIcon>
Content </Button>

        <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)}>
          {getList()}
        </Drawer>
      </div>
    );
  }


  export default CourseInfoMui