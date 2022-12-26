import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import Filter from "../components/FilterForm";
import FForm from "../components/FilterForm2";
import FFormPrice from "../components/FilterFormPrice";
import ResponsiveAppBar from "../components/NavBarBS";

import bganim from '../assets/bganim.gif';
import rubixgif from '../assets/Rubix.gif';
import stats from '../assets/stats.gif';

import Typography from '@mui/material/Typography';
import FeaturedCourses from "../components/FeaturedCourses";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import CourseCardDB from "../components/CourseCardDB";

// components
import CourseDetails from "../components/CourseDetails"

const Dashboard = () => {
  const [courses, setCourses] = useState(null)
  const [featured, setfeatured] = useState(null)

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch('/api/courses/getCourses')
      const json = await response.json()

      if (response.ok) {
        setCourses(json)
      }
    }

    fetchCourses()
  }, [])

  return (
    
    <div className = "backgroundimage" >
                     
    <div >
    <Box
                  component="img"
                  sx={{ height: 625, width: 1300 , padding : 0, margins: 0}}
                  alt="Logo"
                  src={bganim}
                />

    </div>

    <div className="course">
      <FFormPrice></FFormPrice>
      <br/>
     <FForm></FForm>
     <br/>

     <div classname="filter"> 

     <SearchBar></SearchBar>
     </div>
      <div className="">
      <Box >
      <Grid container rowSpacing={4} columnSpacing={{ xs: 7, sm: 2, md: 7 }} sx={{ marginLeft : 11 }}>
            {courses && courses.map((course) =>(
          <Grid  key={course._id}>
            <CourseCardDB course={course} key={course._id} />
          </Grid> ))}
      </Grid>
      </Box>
      </div> 
    </div>
    </div>
  )
}



export default Dashboard;