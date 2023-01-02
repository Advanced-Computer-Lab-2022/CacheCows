import TCourseDetails from "../components/indvtraineeviewAllCourses";
import { useEffect, useState } from "react";
import React from "react";
import { useAuthContext } from "../hooks/useAuthContext"
import { useNavigate, useParams } from "react-router-dom";
import "../App.css";
import FForm from "../components/Filterformindv";
import FFormPrice from "../components/FilterformIndvprice";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
function Indvview (){
    const navigate=useNavigate();
    const {user} = useAuthContext()
    const [courses, setCourses] = useState([]);
useEffect(()=>{
    const fetchCourses=async ()=>{
        const response= await fetch('/api/courses/getCourses',{
          method:'GET',
          headers: {'Authorization': `Bearer ${user.token}`},
        })
        const json= await response.json()

        if(response.ok){
        setCourses(json)
        }
    }
    if (user) {
      fetchCourses()
        }
    
},[user])
return(
  <div className="allcoursesbg">
  <button className="back" onClick={() => navigate(-1)}> ❮ Back </button>
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
  <br></br>
        <br/>
      <FForm></FForm>
      <FFormPrice></FFormPrice>

      <br/>
      
      <Box >
<Grid container rowSpacing={4} columnSpacing={{ xs: 5, sm: 1, md: 5 }} sx={{ marginLeft : 35, marginTop : -20 }}>
            {courses && courses.map((course) =>(
          <Grid >
      <TCourseDetails course={course} key={course._id} />
    </Grid> ))}
</Grid>
</Box>  


<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
    </div>
)
}
export default Indvview