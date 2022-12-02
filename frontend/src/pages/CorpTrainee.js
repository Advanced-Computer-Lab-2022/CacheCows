import React from "react";
import ListPage from "../components/ListPage";
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import CustomSelect from "../components/CustomSelect";
import SearchBar from "../components/SearchBar";
import CourseDetails from "../components/CourseDetails";
import { useAuthContext } from "../hooks/useAuthContext"
import CountryForm from "../components/CountryForm";


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


  function CorpTrainee() {
    const navigate=useNavigate();
    const [query, setQuery] = useState("");
    const [courses,setCourses]=useState()
    const [selectedLanguages, setSelectedLanguages] = useState([])
  
    useEffect(() => {
      const fetchData = async () => {
            
      
        const x = {query};
        const response = await fetch('/api/courses/SearchCourseByOpt', {
          method: 'GET',
          body: JSON.stringify(x),
          headers: {
              'Content-Type' : 'application/json'
          }
      })
      const json = await response.json()
  
      if(!response) {
          setCourses(json.error)
      }
      if(response.ok){
        setCourses(json);
      }
        
  
      };
      if (query.length === 0 || query.length > 2) fetchData();
    }, [query]);

  return( 
    <div className="CorpTrainee">
      <SearchBar></SearchBar> 
      <p> </p>
      <div className= 'filter' >
        <CountryForm></CountryForm>
      </div>
      <p> </p>

      
      

      
    <button onClick={()=>navigate("/cropchangepassword")}>Change password</button>
    <p></p>
    <button
       onClick={()=>navigate("/Corpview")}
      >
        
        view all courses
      </button>
      <p></p>
      <button  onClick={()=>navigate("/Corpregisteredcourses")}>view registered courses</button>
  </div>
  )
}

export default CorpTrainee;

