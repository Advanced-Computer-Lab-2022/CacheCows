
import React from "react";
import { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import TCourseDetails from "../components/indvtraineeviewAllCourses";
import { useNavigate, useParams } from "react-router-dom";
import "../App.css";
import CustomSelect from "../components/CustomSelect"
import SearchBar from "../components/SearchBar";
import ReviewForm from "../components/IReviewForm";
import BasicExample from "../components/CourseCard";
import { useAuthContext } from "../hooks/useAuthContext"
import FForminst from "../components/FilterForm";
import FFormPrice from "../components/FilterFormPrice";
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

function IndTraineeNew() {

    const {user} = useAuthContext();


  const paramss = new URLSearchParams(window.location.search);
  const indvid = paramss.get('userId');




  const [query, setQuery] = useState("");
  const [courses, setCourses] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([])
  const [username , setname] = useState('');
//   setname(user.name);

  const navigate=useNavigate();

  useEffect(() => {
    const fetchData = async () => {
          
    
      const x = {query};
      const response = await fetch('/api/courses/SearchCourseByOpt', {
        method: 'POST',
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

    <div >
<br/>

<div className="bio">
      <h1> My Profile  </h1>
      

      <button on onClick={() => {window.location.href=`/indvchangepassword?userId=${user._id}`}}
    > Change password</button>
    <br></br>
    <br></br>
    <button onClick={()=>navigate("/Indvview")}> View all Courses</button>
      
      <br/>
      <br/>
      <button onClick={() => window.location.href=`/ReportsPage?user_id=${indvid}`}
        key={indvid}>View Reports
      </button>

      &nbsp;&nbsp;&nbsp;

      
      </div>
<br>
</br>
      
      <SearchBar></SearchBar>
      <br/>
      <CountryForm></CountryForm>
      <br/>

    <div className= 'filter' >
     <button onClick={()=>navigate("/Indvview")}> View all Courses</button>
     <br/>
     <br/>
    <button on onClick={() => {window.location.href=`/indvchangepassword?userId=${user._id}`}}
    > Change password</button>
    <br/>
    <br/>
    <button onClick={()=>navigate("/Indvregistercourses")}> view registered courses</button>
    <br/>
    <br/>
    <button onClick={() => window.location.href=`/ReportsPage?user_id=${indvid}`}
        key={indvid}>View Reports
      </button>
      
   </div>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>

   </div>
   

  );
}


export default IndTraineeNew;































