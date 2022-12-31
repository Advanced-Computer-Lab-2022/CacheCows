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

import rubixgif2 from '../assets/Rubix2.gif';
import Box from '@mui/material/Box';
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
  const paramss = new URLSearchParams(window.location.search);
  const indvid = paramss.get('userId');

  const [query, setQuery] = useState("");
  const [courses, setCourses] = useState([]);
  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const [selectedLanguages, setSelectedLanguages] = useState([])
  const {user} = useAuthContext()
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
const getinst=async()=>{
  const response=await fetch(`/api/indvtrainee/getOneindvTrainee?userId=${indvid}`,
  {
    method: 'GET',
    headers: {
        'Content-Type' : 'application/json'
       
    }
})
const json=await response.json()
console.log(json)
if(response.ok){
  setName(json.Name)
  setEmail(json.indv_email)
  console.log("khalsona baa")
}



}
getinst()

    if (query.length === 0 || query.length > 2) fetchData();
  }, [query]);
 
  

  return (

    <div >
      <div className="profilehead">
      <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
   
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <h1> welcome :{name}!</h1>
    <h1>Email:{email}!</h1>
    
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

      </div>
     

  <CountryForm></CountryForm>
      <br/>
    <div  className="profilebody" >
     <button className="profilebutton" onClick={()=>navigate("/Indvview")}> View all Courses</button>
     <br/>
     <br/>
    <button className="profilebutton" on onClick={() => {window.location.href=`/indvchangepassword?userId=${user._id}`}}
    > Change password</button>
    <br/>
    <br/>
    <button className="profilebutton" onClick={()=>navigate("/Indvregistercourses")}> view registered courses</button>

    <button className="profilebutton" onClick={()=>navigate("/viewwallet")}> viewwallet</button>
    <br/>
    <br/>
    <button className="profilebutton" onClick={() => window.location.href=`/ReportsPage?user_id=${indvid}`}
        key={indvid}>View Reports
      </button>
      

      <button className="profilebutton" onClick={() => window.location.href=`/IndTraineeNew?userId=${indvid}`}
        key={indvid}>New Style
      </button>

    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

   </div>
   </div>
   

  );
}


export default IndTrainee;