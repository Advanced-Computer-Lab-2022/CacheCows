import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import Filter from "../components/FilterForm";
import FForm from "../components/FilterForm2";
import FFormPrice from "../components/FilterFormPrice";
import ResponsiveAppBar from "../components/NavBarBS";

import bganim from '../assets/bganim.gif';
import rubixgif from '../assets/Rubix.gif';
import rubixgif2 from '../assets/Rubix2.gif';

import stats from '../assets/stats.gif';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FeaturedCourses from "../components/FeaturedCourses";

// components
import CourseDetails from "../components/CourseDetails"

const Dashboard = () => {
  const [courses, setCourses] = useState(null)
  const [featured, setFeatured] = useState(null)

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch('/api/courses/getCourses')
      const json = await response.json()

      if (response.ok) {
        setCourses(json)
      }


    const response1 = await fetch('/api/courses/getCHype')
    const json1 = await response1.json()

    if (response1.ok) {
      setFeatured(json1)
    }
  }

    fetchCourses()
  }, [])

  /*
  <div >
  <Box
  component="img"
  sx={{ height: 625, width: 1300 , padding : 0, margins: 0}}
  alt="Logo"
  src={bganim}
/>
</div>
*/



  return (
    
    <div className = "dashboardpage" >
                     
  <div>               
  <Box
  component="img"
  sx={{ height: 625, width: 1100 , padding : 0, margins: 0}}
  alt="Logo"
  src={rubixgif2}
/>
</div>

<div >
  <Box
  component="img"
  sx={{ height: 325, width: 1500 , padding : 0, margins: 0}}
  alt="Logo"
  src={stats}
/>
</div>

     <div className="reports">
        {featured && featured.map((course) => (
          <FeaturedCourses course={course} key={course._id} />
        ))}
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