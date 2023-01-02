import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import '../styles.css';

const FeaturedCourses = ({course}) => {
  return (
    <div className="pop-details">
    <ImageList sx={{ width: 400, height: 200 , display: 'inline-grid', marginLeft:10, color : '#a6607c', overflowY : 'scroll'}}>
        <ImageListItem sx={{color : '#a6607c'}} key={course._id}>
          <iframe src={course.course_preview1} title="YouTube video" allowFullScreen></iframe>
          <ImageListItemBar sx={{background : '#a6607c', opacity: 0.9}}
            subtitle={course.course_instructor_name}
            actionIcon={
              <IconButton
                color='#111111'
                onClick={() => window.location.href=`/CoursePagePreview?course_id=${course.course_id}`}
                sx={{marginLeft : 10 ,marginRight : 17, justifyItems : 'center', color : '#fff' }}
                aria-label={`info about ${course.title}`}
              >
                {course.course_id}
              </IconButton>
            }
          />
        </ImageListItem>
    </ImageList>
    </div>
  );
}

export default FeaturedCourses;