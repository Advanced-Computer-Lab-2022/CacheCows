import { Container } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from "react";
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
  


const CourseInfoMuiPrev = ({course}) => {
    const [show, setShow] = useState(false);    
    const { user } = useAuthContext()

    const type = localStorage.getItem('type')
      
    

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const [open, setOpen] = useState(false);

  
    const getList = () => (
      <div style={{ width: 250 ,color: '#a6607c' }} onClick={() => setOpen(false)}>
        <br/>
          {course.course_name && (<ListItem   button >
            <ListItemText  primary={course.course_name} onClick={() => window.location.href=`/CoursePagePreview?course_id=${course.course_id}&week=${1}`}/>
          </ListItem>)}
          < h6 className='h7'>___________________________</ h6>

          {course.course_subtopic1 && (<ListItem button >
            <ListItemText primary={course.course_subtopic1} onClick={() => window.location.href=`/CoursePagePreview?course_id=${course.course_id}&week=${2}`}/>
          </ListItem>)}

          < h6 className='h7'>___________________________</ h6>

          {course.course_subtopic2 && (<ListItem button >
            <ListItemText primary={course.course_subtopic2} onClick={() => window.location.href=`/CoursePagePreview?course_id=${course.course_id}&week=${3}`}/>
          </ListItem>)}

          < h6 className='h7'>___________________________</ h6>

          {course.course_subtopic3 && (<ListItem button disabled>
            <ListItemText primary={course.course_subtopic3} onClick={() => window.location.href=`/CoursePagePreview?course_id=${course.course_id}&week=${4}`}/>
          </ListItem>)}

          < h6 className='h7'>___________________________</ h6>

          {course.course_subtopic4 && (<ListItem button disabled>
            <ListItemText primary={course.course_subtopic4} onClick={() => window.location.href=`/CoursePagePreview?course_id=${course.course_id}&week=${5}`}/>
          </ListItem>)}

          < h6 className='h7'>___________________________</ h6>

          {course.course_subtopic5 && (<ListItem button disabled>
            <ListItemText primary={course.course_subtopic5} onClick={() => window.location.href=`/CoursePagePreview?course_id=${course.course_id}&week=${6}`}/>
          </ListItem>)}

          < h6 className='h7'>___________________________</ h6>

          {course.course_subtopic6 && (<ListItem button disabled>
            <ListItemText primary={course.course_subtopic6} onClick={() => window.location.href=`/CoursePagePreview?course_id=${course.course_id}&week=${7}`}/>
          </ListItem>)}
          < h6 className='h7'>___________________________</ h6>
          <br></br>
          <br></br>
          <br></br>
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


  export default CourseInfoMuiPrev;