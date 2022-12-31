import { useAuthContext } from "../hooks/useAuthContext"
import { useEffect, useState } from "react"
import Registeredcoursedetails from "../components/Registercoursedetails"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import CourseCardUsers from "../components/CourseCardUsers";
import { useNavigate } from "react-router-dom";


const Indvregistercourses =()=>{
    const {user} = useAuthContext()
    const [courses,setCourses]=useState('')
    const [error,setError]=useState(null)
useEffect(()=>{
    const fetchcourses=async()=>{
        const response=await fetch('/api/indvtrainee/getregistercourses',
        {
            method:'GET',
            headers: {'Authorization': `Bearer ${user.token}`},
        })
        const json= await response.json()
        if(response.ok){
            setCourses(json)
            setError(null)
            console.log(json)

        }
        if(!response.ok){
            setCourses('')
            setError(json.error)
            console.log(json.error)
        }
        
    }
    if (user) {
        fetchcourses()
          }
},[user])

const navigate=useNavigate();

return(

<div className="pagesplain"> 
    <button className="back" onClick={() => navigate(-1)}> ❮ Back </button>
    <br></br>
    <h3> My Courses</h3>
<Box >
      <Grid container rowSpacing={4} columnSpacing={{ xs: 7, sm: 2, md: 7 }} sx={{ marginLeft : 11 }}>
            {courses && courses.map((course) =>(
          <Grid  key={course._id}>
            <CourseCardUsers course={course} key={course._id} />
          </Grid> ))}
      </Grid>
</Box>  
<br/>
<br/>
<br/>

{error && <div className="error">{error}</div>}
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
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
);
}
export default Indvregistercourses