
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseDetails from "../components/CourseDetails"
import CourseForm from "../components/CourseForm"
import CountryForm from "../components/CountryForm"
import CustomSelect from "../components/CustomSelect"
import SearchBar from "../components/SearchBar";
import { useAuthContext } from "../hooks/useAuthContext";
import CourseInfo from "../components/CourseInfo";
import CourseInfoMui from "../components/CourseInfoMui";
import { Nav } from "react-bootstrap";
import Notes from "../components/Notes";


const CoursePage=()=>{
    const user = useAuthContext()

    
    const [courses,setCourses]=useState()

    const params = new URLSearchParams(window.location.search);
    const course_id = params.get('course_id');
    const crs = {course_id : course_id}

    const params1 = new URLSearchParams(window.location.search);
    const wk = params.get('week');

    const type = localStorage.getItem('type')
    const [exams, setExams] = useState();  

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

useEffect(()=>{
  const fetchExams=async ()=>{
      const response1= await fetch('api/exams/getCExams',{
          method: 'POST',
          body: JSON.stringify(crs),
          headers: {
            'Content-Type' : 'application/json',
            'Authorization': `Bearer ${user.token}`},
        })
        const json1= await response1.json()

        if(response1.ok){
        setExams(json1)
        console.log("yess: ",json1,course_id)
        }
        if(!response1.ok){
          setExams('')
          console.log("WTF: ",json1)
          }
  }
  fetchExams();
  
},[])
const navigate=useNavigate();

    return(
      <div className="pagesplain">
            <button className="back" onClick={() => navigate(-1)}> ❮ Back </button>
            <br></br>
            <br></br>
            
    {courses && courses.map((course) =>(
    <CourseInfoMui course={course} key={course._id} />))}  
    <div> 
      {courses && courses.map((course) =>(
    <CourseInfo course={course} key={course._id}/>))}
        </div>
    <div>
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
    <div>
    </div>
    <br/> 
    <br/> 

    </div>
    </div>

 )

}
export default CoursePage



