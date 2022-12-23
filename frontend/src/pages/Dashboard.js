import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import Filter from "../components/FilterForm";
import FForm from "../components/FilterForm2";
import FFormPrice from "../components/FilterFormPrice";
import ResponsiveAppBar from "../components/NavBarBS";
import bg from '../assets/bg.png';
import bgo from '../assets/bgo.jpg';
import bganim from '../assets/bganim.gif';
import bganim2 from '../assets/bganim2.gif';
import Typography from '@mui/material/Typography';


import Box from '@mui/material/Box';

// components
import CourseDetails from "../components/CourseDetails"

const Dashboard = () => {
  const [courses, setCourses] = useState(null)

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

<Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Welcome To RUBIX!
          </Typography>


    </div>
    <div className="course">
      <FFormPrice></FFormPrice>
      <br/>
     <FForm></FForm>
     <br/>

     <div classname="filter"> 

     <SearchBar></SearchBar>
     </div>
      <div className="filter">
        {courses && courses.map((course) => (
          <CourseDetails course={course} key={course._id} />
        ))}
      </div> 
    </div>
    </div>
  )
}



export default Dashboard;