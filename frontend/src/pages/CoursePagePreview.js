
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseDetails from "../components/CourseDetails"
import CourseForm from "../components/CourseForm"
import CountryForm from "../components/CountryForm"
import CustomSelect from "../components/CustomSelect"
import SearchBar from "../components/SearchBar";
import { useAuthContext } from "../hooks/useAuthContext";
import CourseInfoGuest from "../components/CourseInfoGuest";
import { Nav } from "react-bootstrap";
import CourseInfoMuiPrev from "../components/CourseInfoMuiPrev";

const CoursePagePreview =()=>{
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
const navigate=useNavigate();

    return(
      <div className="pagesplain">
            <button className="back" onClick={() => navigate(-1)}> ❮ Back </button>

            <div> 
      {courses && courses.map((course) =>(
    <CourseInfoMuiPrev course={course} key={course._id}/>
       ))}
    </div>

    <div className="instructor">
      {courses && courses.map((course) =>(
    <CourseInfoGuest course={course} key={course._id} />))}  
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    </div>

 )

}
export default CoursePagePreview



