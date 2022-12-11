
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseDetails from "../components/CourseDetails"
import CourseForm from "../components/CourseForm"
import CountryForm from "../components/CountryForm"
import CustomSelect from "../components/CustomSelect"
import SearchBar from "../components/SearchBar";
import { useAuthContext } from "../hooks/useAuthContext";
import CourseInfo from "../components/CourseInfo";
import { Nav } from "react-bootstrap";
import Notes from "../components/Notes";


const CoursePage=()=>{
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
        }
    }
    fetchCourses();
    
},[])

    return(
    <div className="instructor">
      <div> 
      {courses && courses.map((course) =>(
    <CourseInfo course={course} key={course._id} />))}  
    </div>
    <div>
      <label> Course Notes </label>
      <Notes/>
    </div>
    </div>

 )

}
export default CoursePage



