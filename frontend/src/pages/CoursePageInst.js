
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseDetails from "../components/CourseDetails"
import CourseForm from "../components/CourseForm"
import CountryForm from "../components/CountryForm"
import CustomSelect from "../components/CustomSelect"
import SearchBar from "../components/SearchBar";
import { useAuthContext } from "../hooks/useAuthContext";
import CourseInfoInst from "../components/CourseInfoInst";
import CourseInfoMuiInst from "../components/CourseInfoMuiInst";
import { Nav } from "react-bootstrap";
import Notes from "../components/Notes";
import ExamQsInst from "../components/ExamQsInst";


const CoursePage=()=>{
    const user = useAuthContext()

    
    const [courses,setCourses]=useState()

    const params = new URLSearchParams(window.location.search);
    const course_id = params.get('course_id');
    const crs = {course_id : course_id}

    const params1 = new URLSearchParams(window.location.search);
    const week = params.get('week');

    const type = localStorage.getItem('type')
    const [exams, setExams] = useState();  
    const [exam1, setExam1] = useState();
    const [exam2, setExam2] = useState();
    const [exam3, setExam3] = useState();
    const [exam4, setExam4] = useState();
    

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
          if(!response.ok){
            setCourses('')
            }
    }
    fetchCourses();
    const fetchExams=async ()=>{
      const response1= await fetch('api/exams/getCExams',{
          method: 'POST',
          body: JSON.stringify(crs),
          headers: {
            'Content-Type' : 'application/json'},
        })
        const json1= await response1.json()
        const ex1 = await json1[0]
        const ex2 = await json1[1]
        const ex3 = await json1[2]
        const ex4 = await json1[3]

  
        if(response1.ok){
        setExams(json1)
        setExam1(ex1)
        setExam2(ex2)
        setExam3(ex3)
        setExam4(ex4)
        }
        if(!response1.ok){
          setExams('')
          setExam1('')
          setExam2('')
          setExam3('')
          setExam4('')
          }

          
  console.log("ex: ",json1)
  }
  fetchExams();

    
},[crs,exam1,user.token])


const navigate=useNavigate();

    return(
      <div className="pagesplain">
            <button className="back" onClick={() => navigate(-1)}> ❮ Back </button>
            <br></br>
            <br></br>
            
            <div> 
      {courses && courses.map((course) =>(
    <CourseInfoMuiInst course={course} key={course._id}/>))}
        </div>
    {courses && courses.map((course) =>(
    <CourseInfoInst course={course} key={course._id} />))}  
    
      {exam1 && week === '8'?(
        <div> 
            <ExamQsInst exam={exam1}/>
        </div>
        ): exam2 && week === '9'?(        
        <div> 
          <ExamQsInst exam={exam2} />
      </div>): exam3 && week === '10'?(
                <div> 
                <ExamQsInst exam={exam3} />
            </div>
      ): exam4 && week === '11'?(
        <div> 
        <ExamQsInst exam={exam4} />
    </div>
      ):(<div></div>)}
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
    </div>

 )

}
export default CoursePage



