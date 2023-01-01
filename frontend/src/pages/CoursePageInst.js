
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

import CourseInfoInst from "../components/CourseInfoInst";
import CourseInfoMuiInst from "../components/CourseInfoMuiInst";


const CoursePageInst=()=>{
    const user = useAuthContext()

    
    const [courses,setCourses]=useState()

    const params = new URLSearchParams(window.location.search);
    const course_id = params.get('course_id');
    const crs = {course_id : course_id}

useEffect(()=>{
    const fetchCourses=async ()=>{
        const response= await fetch('api/courses/getCourse',{
          method: 'POST',
          body: JSON.stringify(crs),
          headers: {
            'Content-Type' : 'application/json',
            'Authorization': `Bearer ${user.token}`},
        })
        const json= await response.json()

        if(response.ok){
          setCourses(json)
          console.log("Done: ",json)
          }
          if(!response.ok){
              setCourses(json)
              console.log("Not Done: ",json)
          }
    }
    fetchCourses();
    
},[])
const navigate=useNavigate();

    return(
      <div className="pagesplain">
            <button className="back" onClick={() => navigate(-1)}> ❮ Back </button>
            <br></br>
            <br></br>
\      
      <div> 
      {courses && courses.map((course) =>(
    <CourseInfoInst course={course} key={course._id}/>
       ))}
    </div>
    {courses && courses.map((course) =>(
    <CourseInfoMuiInst course={course} key={course._id}/>
    ))}
    </div>

 )

}
export default CoursePageInst



