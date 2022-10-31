
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseDetails from "../components/CourseDetails"
import CourseForm from "../components/CourseForm"
import CountryForm from "../components/CountryForm"
import SearchBar from "../components/SearchBar";
import CustomSelect from "../components/CustomSelect"

const languages = [
    {
      id: 0,
      label: 'Egypt',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png'
    },
    {
      id: 1,
      label: 'Germany',
      logo: 'https://www.php.net//images/logos/new-php-logo.svg'
    },
    {
      id: 2,
      label: 'Greece',
      logo: 'https://logodownload.org/wp-content/uploads/2019/10/python-logo-2.png'
    },
    {
      id: 3,
      label: 'Italy',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/1200px-Go_Logo_Blue.svg.png'
    },
    {
      id: 4,
      label: 'Austria',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/C_Sharp_logo.svg'
    }
  ]

const Instructor=()=>{
    
    const [courses,setCourses]=useState()
    const [selectedLanguages, setSelectedLanguages] = useState([])
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
    <CourseDetails course={course} key={course._id} />))}          
    </div>
    <CourseForm />
    <CountryForm/>
   <button onClick={()=>{
    navigate("/instructorcourseByprice");
   }}>
    show courses by price</button>
    <div>
      <CustomSelect title="Select your country:" value={selectedLanguages} onChange={(v) => setSelectedLanguages(v)} options={languages}/>
      </div>
</div>






    )

}
export default Instructor



