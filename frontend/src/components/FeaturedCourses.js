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
    <ImageList sx={{ width: 400, height: 200 , display: 'inline-grid', marginLeft:10}}>
        <ImageListItem sx={{color : '#fff'}} key={course._id}>
          <iframe src={course.course_preview1} title="YouTube video" allowFullScreen></iframe>
          <ImageListItemBar
            subtitle={course.course_instructor_name}
            actionIcon={
              <IconButton
                color='info'
                onClick={() => window.location.href=`/CoursePagePreview?course_id=${course.course_id}`}
                sx={{marginLeft : 10 ,marginRight : 17, justifyItems : 'center' }}
                aria-label={`info about ${course.title}`}
              >
                {course.course_id}
              </IconButton>
            }
          />
        </ImageListItem>
    </ImageList>
  );
}

export default FeaturedCourses;