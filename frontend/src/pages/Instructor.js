import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseDetails from "../components/CourseDetails"
import CourseForm from "../components/CourseForm"
import CountryForm from "../components/CountryForm"

const Instructor=()=>{
    
    const [courses,setCourses]=useState()
useEffect(()=>{
    const fetchCourses=async ()=>{
        const response= await fetch('/api/courses/getCourses')
        const json= await response.json()

        if(response.ok){
        setCourses(json)
        }
    }

    fetchCourses()
},[])

const navigate=useNavigate();

    return(
<div classname="instructor">
    <div classname="courses"> 
    {courses && courses.map((course) =>(
                  <CourseDetails course={course} key={course._id} />

                  ))}
                  
    </div>
    <CourseForm />
    <CountryForm/>
   <button onClick={()=>{
    navigate("/instructorcourseByprice");
   }}>
    show courses by price</button>
</div>






    )

}
export default Instructor