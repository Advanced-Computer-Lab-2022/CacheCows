import React from "react";
import { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import CourseDetails from "../components/CourseDetails";
import { useNavigate, useParams } from "react-router-dom";
import "../App.css";
import CustomSelect from "../components/CustomSelect"
import SearchBar from "../components/SearchBar";
import ReviewForm from "../components/IReviewForm";
import BasicExample from "../components/CourseCard";



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

function IndTrainee() {
  const [query, setQuery] = useState("");
  const [courses, setCourses] = useState([]);
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

  return (
    <div className="app" >
      <SearchBar></SearchBar>
      <CustomSelect title="Select your country:" value={selectedLanguages} onChange={(v) => setSelectedLanguages(v)} options={languages}/>
      <ReviewForm />
    </div>
  );
}


export default IndTrainee;