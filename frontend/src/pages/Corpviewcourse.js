import TCourseDetails from "../components/corpviewcourses";
import { useEffect, useState } from "react";
import React from "react";
import { useAuthContext } from "../hooks/useAuthContext"
import { useNavigate, useParams } from "react-router-dom";
import "../App.css";
import FForm from "../components/Filterformindv";
import FFormPrice from "../components/Filterformpriceindv";

function Corpview (){
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
    
},[])
return(
    <div className="app">
        <FForm></FForm>
      <FFormPrice></FFormPrice>
 {courses && courses.map((course) =>(
    <TCourseDetails course={course} key={course._id} />))} 


    </div>
)
}
export default Corpview