import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import '../styles.css';

const FeaturedCourses2 = ({course}) => {
  return (
    <div className="admin-details">
        <p><strong>Name: </strong>{course.course_id}</p>
        

        <p>{course.createdAt}</p>
      </div>
  );
}

export default FeaturedCourses2;