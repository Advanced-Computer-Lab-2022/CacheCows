import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useAuthContext } from '../hooks/useAuthContext'
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

const SearchResults = () => {
    const paramss = new URLSearchParams(window.location.search);
    const text = paramss.get('search');

    const { user } = useAuthContext()

  const [courses, setCourses] = useState(null)
  const[error , setError] = useState(null)


  useEffect(() => {
    const value = { text }
    const fetchCourses = async () => {
        const response = await fetch('/api/courses/SearchCourseByOpt', {
            method: 'POST',
            body: JSON.stringify(value),
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
            setCourses('')  
        }
        if(response.ok) {  
        setCourses(json)  
        setError(null)
            
        console.log('Search Done!', json)
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


     <div className=""> 
     <h3> ___________________________________________ </h3>
     <br></br>
     <h3> Search Results </h3>

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
      {error && <div className="error">{error}</div>}
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



export default SearchResults;