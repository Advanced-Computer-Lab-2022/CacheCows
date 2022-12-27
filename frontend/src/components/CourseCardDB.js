import * as React from 'react';
import '../styles.css';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Container } from 'react-bootstrap'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import DiscountIcon from '@mui/icons-material/Discount';
import Popover from '@mui/material/Popover';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Button, Icon } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import ReviewsRoundedIcon from '@mui/icons-material/ReviewsRounded';
import ReportRoundedIcon from '@mui/icons-material/ReportRounded';
import ReportGmailerrorredRoundedIcon from '@mui/icons-material/ReportGmailerrorredRounded';
import RateReviewRoundedIcon from '@mui/icons-material/RateReviewRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';
import PercentRoundedIcon from '@mui/icons-material/PercentRounded';
import { alignProperty } from '@mui/material/styles/cssUtils';
import CoPresentIcon from '@mui/icons-material/CoPresent';

const styles = theme => ({
  edgeEnd: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  }
});

 const CourseCardDB = ({course}) => {
    const [isShown, setIsShown] = useState(false);
    const [prv1, setprv1] = useState(true);
    const [prv2, setprv2] = useState(false);
    const [prv3, setprv3] = useState(false);
    const [disc1, setDisc1] = useState(true);
    const [disc2, setDisc2] = useState(false);
    const [disc3, setDisc3] = useState(false);
    const [Dflag, setDflag] = useState(true);
  const [expanded, setExpanded] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [report_status, setstatus] = React.useState('')

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true)
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false)
  };

  const handlereport1 = () => {
    setChecked1(!checked1)
    setChecked2(false)
   }

   const handlereport2 = () => {
    setChecked1(false)
    setChecked2(!checked2)
   }

  useEffect(()=>{ 

    const fetchCourses=async ()=>{

      if(course.cource_price_after_discount !== 0){
        setDflag(true)
      }else{
        setDflag(false)
      }
    }
  
      fetchCourses()
    
},[course.cource_price_after_discount])

function sub1() {
  setprv1(true) 
  setprv2(false) 
  setprv3(false)
  setDisc1(true)
  setDisc2(false)
  setDisc3(false)
}

function sub2() {
  setprv1(false) 
  setprv2(true) 
  setprv3(false)
  setDisc1(false)
  setDisc2(true)
  setDisc3(false)
}

function sub3() {
  setprv1(false) 
  setprv2(false) 
  setprv3(true)
  setDisc1(false)
  setDisc2(false)
  setDisc3(true)
}

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
            <IconButton aria-label="settings"  variant="contained" onMouseEnter={handleClick} >
            <MoreVertIcon/>
            <Popover
            onClose={handleClose}
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            <FormGroup>
            <Button sx={{ p: 2 }} onClick={() => window.location.href=`/AddReportPage?course_id=${course.course_id}`}>Report Course</Button>
            <Button onClick={handleClose} color="secondary">Close</Button>
        </FormGroup>
         </Popover>
          </IconButton>  
        }
        title={course.course_id}
        subheader={course.createdAt}
        onSubmit={handleClose}
      />
      <CardContent>
        {prv1 && (<iframe src={course.course_preview1} title="YouTube video" allowFullScreen></iframe>)}
        {prv2 && (<iframe src={course.course_preview2} title="YouTube video" allowFullScreen></iframe>)}
        {prv3 && (<iframe src={course.course_preview3} title="YouTube video" allowFullScreen></iframe>)}
      </CardContent>
      
      <CardContent>
        <Typography variant="body2" color="text.secondary" justifyContent={"center"} boxSizing="fixed">
            {disc1 && (<p><strong>Course Description: </strong>{course.course_description1}</p>)}
            {disc2 && (<p><strong>Course Description: </strong>{course.course_description2}</p>)}
            {disc3 && (<p><strong>Course Description: </strong>{course.course_description3}</p>)}
        </Typography>
        <Typography variant="body2" color="text.secondary" justifyContent={"center"} boxSizing="fixed">
            <p><strong>Course hours: </strong>{course.course_total_hours}</p>
        </Typography>
        <Typography variant="body2" color="text.secondary" justifyContent={"center"} boxSizing="fixed">
        <p><strong>Instructor Name: </strong>{course.instructor_name}</p>
        </Typography>
      </CardContent>
      <CardActions disableSpacing='false' sx={{marginTop : -4}}>
      <Button
        onClick={() => window.location.href=`/CoursePagePreview?course_id=${course.course_id}`}
        sx={{ marginTop : 0,marginLeft : 11,border : 2 }}
        size='small'
        color='primary'>
          Check Course
          <CoPresentIcon sx={{marginLeft : 1 }}/>
        </Button>

        <Button aria-label="share" edge='end' 
        onClick={() => window.location.href=`/creviews?course_id=${course.course_id}`}
        sx={{ marginTop : 5,marginLeft : 11, border : 2 }}
        size='small'
        color='primary'>
          Check Reviews
          <ReviewsRoundedIcon sx={{marginLeft : 1 }}/>
        </Button>
      </CardActions>
      <CardActions sx={{marginTop : 0}}>
        <IconButton aria-label="share" edge='end'>
          <StarRateRoundedIcon/>
          {course.course_rating}
        </IconButton>
        {!Dflag && (
        <IconButton  aria-label="share" color='info' sx={{ marginLeft : 22 }} size='small'>
          <MonetizationOnRoundedIcon />
          {course.course_price}
        </IconButton>
        )}
        {Dflag && (
        <CardActions>
        <IconButton color='info' disabled='true'
        size='small' sx={{marginLeft : 20}}>
          <MonetizationOnRoundedIcon />
          {course.course_price}
        </IconButton>
        </CardActions>
        )}
        </CardActions>
        <CardActions sx={{marginTop : -15,marginLeft : 16.5,marginBottom : -5}}>
        {Dflag && (
        <IconButton color='info' className='xyz' size='small' sx={{marginLeft : 10,marginRight : -20, marginTop : 10}}>
        <MonetizationOnRoundedIcon/>
        {course.course_price_after_discount}
         </IconButton>
         )}
      </CardActions>
      <CardContent>
      </CardContent>
    </Card>
  );
}

export default CourseCardDB;