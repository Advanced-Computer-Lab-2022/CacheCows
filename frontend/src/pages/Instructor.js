
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseDetails from "../components/CourseDetails"
import CourseForm from "../components/CourseForm"
import CountryForm from "../components/CountryForm"
import CustomSelect from "../components/CustomSelect"
import SearchBar from "../components/SearchBar";
import { useAuthContext } from "../hooks/useAuthContext"
import Filter from "../components/FilterForm";


const languages = [
    {
      id: 0,
      label: "Hardware",
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png'
    },
    {
      id: 1,
      label: "IT and Software",
      logo: 'https://www.php.net//images/logos/new-php-logo.svg'
    },
    {
      id: 2,
      label: "Music",
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
  const {user} = useAuthContext()
  const [courses,setCourses]=useState()
  const [selectedLanguages, setSelectedLanguages] = useState([])
  const [filter,setFilter]=useState()
  const [filtered,setFiltered]=useState()
  const [error , setError] = useState(null);

  const params = new URLSearchParams(window.location.search);
    const instructor_id = params.get('userId');
    const inst = {instructor_id : instructor_id}

useEffect(()=>{
    const fetchCourses=async ()=>{
        const response= await fetch('/api/courses/getInstCourses',{
          method: 'POST',
          body: JSON.stringify(inst),
          headers: {
            'Content-Type' : 'application/json',
            'Authorization': `Bearer ${user.token}`},
        })
        const json= await response.json()

        if(response.ok){
        setCourses(json)
        }
        if(!response.ok){
          console.log('NO Courses',JSON.stringify(user._id))
          }
    }
    if (user) {
      fetchCourses()
        }
    
},[])

const handleSubmit = async(e) => {
  //e.preventDefault()
  setSelectedLanguages(e);
  setFilter(languages.at({id: e[0]}));


  const subj = { course_subject : filter }

  const response = await fetch('/api/courses/filterCourseBySubjectOrRating', {
      method: 'POST',
      body: JSON.stringify(subj),
      headers: {
          'Content-Type' : 'application/json'
      }
  })
  const json = await response.json()

  if(!response.ok) {
      console.log('What is: ',filter)
      setError(json.error)
      setFiltered('')
      
  }
  if(response.ok) {
   setFiltered(json)
   setError(null)

      
  console.log('Courses Retrieved', json)
  }
}

const navigate=useNavigate();

    return(
    <div className="instructor">
      <h1>Hello, {Instructor.name}!</h1>

      <button onClick={()=>{
      navigate("/InstEditEmail");
      }}>Change My Email</button>
      <br/>


      <button onClick={()=>{
      navigate("/ireviews");
      }}>Show Instructor Reviews</button>
      <br/>
      <br/>

     <button onClick={()=>{
      navigate("/creviews");
      }}>Show Course Reviews</button>
      <br/>
      <br/>

     <Filter></Filter>
     <br/>

     <div classname="courses"> 

     <SearchBar></SearchBar>
    {courses && courses.map((course) =>(
    <CourseDetails course={course} key={course._id} />))}          
    </div>
    <CourseForm />
    <CountryForm/>
   <button onClick={()=>{
    navigate("/instructorcourseByprice");
   }}>
    show courses by price</button>

    <button onClick={()=>{
    navigate("/previewinstructorcourse");
   }}>
    Preview My Courses</button>
    <button onClick={()=>navigate("/instchangepassword")}>change Password</button>
    <div>
      <CustomSelect 
      title="Select your country:" 
      value={selectedLanguages} 
      onChange={handleSubmit} 
      options={languages} />
      
      <div className="courses"> 
        {filtered && filtered.map((course) =>(
        <CourseDetails course={course} key={course._id} />))}          
      </div>

      {error && <div className="error">{error}</div>}
      </div>

</div>

 )

}
export default Instructor



