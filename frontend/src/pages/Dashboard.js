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
import rubixphone from '../assets/rubixphone.gif';
import rubixstudents from '../assets/rubixstudents.png';
import rubixstudentsblack from '../assets/rubixstudentsblack.png';


import { useNavigate, useParams } from "react-router-dom";



import stats from '../assets/stats.gif';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FeaturedCourses from "../components/FeaturedCourses";

// components
import CourseDetails from "../components/CourseDetails"
import CourseCardDB from "../components/CourseCardDB";
import Grid from '@mui/material/Unstable_Grid2';

const Dashboard = () => {
  const [courses, setCourses] = useState(null)
  const [featured, setFeatured] = useState(null)
  const navigate=useNavigate();


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
  src={rubixgif2} />
  </div>
  <br></br>
  <br></br>
 <div>
  <Box
  component="img"
  sx={{ height: 325, width: 1500 , padding : 0, margins: 0}}
  alt="Logo"
  src={stats} />
</div>
{/* 
     <div className="reports">
        {featured && featured.map((course) => (
          <FeaturedCourses course={course} key={course._id} />
        ))}
      </div>  */}

    {/* <div className="">
      <FFormPrice></FFormPrice>
      <br/>
     <FForm></FForm>
     <br/>
     </div>

     <div classname="filter"> 

     <SearchBar></SearchBar>
     </div> */}



     <br></br>
     <br></br>
     <br></br>


     <div>   
                  
                  <Box
                  component="img"
                  sx={{ height: 500, width: 1500 , padding : 0, margins: 0}}
                  alt="Logo"
                  src={rubixstudentsblack} />
                  </div>
                
                  <br></br>
                  <br></br>
                  <br></br>

     <div>  

      <h3> ___________________________________________ </h3>
     <br></br>
     <h3> Popular Courses </h3>
     <br></br>
     <br></br>

  <div className="All-Admins">
  {featured && featured.map((course) =>(
    <FeaturedCourses course={course} key={course._id}/>
  ))}
  </div>

  

  <br></br>
                  <br></br>
                  <br></br>
                  
  <Box
  component="img"
  sx={{ height: 500, width: 1500 , padding : 0, margins: 0}}
  alt="Logo"
  src={rubixphone} />
  </div>

  <br></br>
  <br></br>
  <br></br>
  
  <br></br>
     <br></br><br></br>
     <br></br>

     <div className=""> 
     <h3> ___________________________________________ </h3>
     <br></br>
     <h3> Courses </h3>

     <br></br>
     <br></br>
     <br></br>
     <Box >
      <Grid container rowSpacing={4} columnSpacing={{ xs: 7, sm: 2, md: 7 }} sx={{ marginLeft : 11, }}>
            {courses && courses.map((course) =>(
          <Grid >
            <CourseCardDB course={course} key={course._id} sx={{
            bgcolor: 'background.paper',
            boxShadow: 1,
            borderRadius: 2,
            p: 2,
            minWidth: 300,
            display : "inline",
            border : 2
          }}/>
          </Grid> ))}
      </Grid>
    </Box> 
    </div>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>


    <div>               
  <Box
  component="img"
  sx={{ height: 500, width: 1500 , padding : 0, margins: 0}}
  alt="Logo"
  src={rubixstudents} />
  <br></br>
  <div>
  <br></br>
  <br></br>

  <body> Copyrights 2022</body>
  <body> Developed By CacheCows </body>


  </div>

  </div>



    </div>
  )
}



export default Dashboard;