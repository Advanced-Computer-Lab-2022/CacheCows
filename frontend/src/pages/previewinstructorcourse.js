import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseDetails from "../components/CourseDetails"

const Prieviewinstructorcourse=()=>{
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
                    <button className="back" onClick={() => navigate(-1)}> ❮ Back </button>

     <div classname="courses"> 
    {courses && courses.map((course) =>(
    <CourseDetails course={course} key={course._id} />))}
    </div>
    </div>
    )
}
export default Prieviewinstructorcourse