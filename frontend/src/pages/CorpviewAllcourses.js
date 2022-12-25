import TCourseDetails from "../components/corpviewAllcourses";
import { useEffect, useState } from "react";
import React from "react";
import { useAuthContext } from "../hooks/useAuthContext"
import { useNavigate, useParams } from "react-router-dom";
import "../App.css";
import FForm from "../components/Filterformcorp";
import FFormPrice from "../components/Filterformcorpprice";

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
    
},[user])
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