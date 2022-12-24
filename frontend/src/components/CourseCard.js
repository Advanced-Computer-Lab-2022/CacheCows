import * as React from 'react';
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

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

 const CourseCard = ({course}) => {
    const [isShown, setIsShown] = useState(false);
    const [prv1, setprv1] = useState(true);
    const [prv2, setprv2] = useState(false);
    const [prv3, setprv3] = useState(false);
    const [disc1, setDisc1] = useState(true);
    const [disc2, setDisc2] = useState(false);
    const [disc3, setDisc3] = useState(false);
    const [Dflag, setDflag] = useState(true);
  const [expanded, setExpanded] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(true);
  };

  const handleClose = () => {
    setAnchorEl(false);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  useEffect(()=>{ 

    const fetchCourses=async ()=>{

      if(course.cource_price_after_discount !== 0){
        setDflag(false)
      }else{
        setDflag(true)
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
          <IconButton aria-label="settings"  onClick={handleClick}>
            <MoreVertIcon />
            <Popover 
              id={id}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
              transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
         </Popover>
          </IconButton>
        }
        title={course.course_id}
        subheader={course.createdAt}
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
      </CardContent>
      <CardActions disableSpacing='false' >
        <IconButton aria-label="add to favorites" onClick={() => window.location.href=`/InstSetCourseDiscount?course_id=${course.course_id}`}>
          <DiscountIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="share" edge='end'>
          <StarRateRoundedIcon/>
          {course.course_rating}
        </IconButton>
      </CardActions>
      <CardActions disableSpacing>
        <IconButton aria-label="share" edge='end'>
          <StarRateRoundedIcon/>
          {course.course_rating}
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default CourseCard;