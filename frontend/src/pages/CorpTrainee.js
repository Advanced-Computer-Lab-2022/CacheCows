import React from "react";
import ListPage from "../components/ListPage";
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import CustomSelect from "../components/CustomSelect";
import SearchBar from "../components/SearchBar";
import CourseDetails from "../components/CourseDetails";
import { useAuthContext } from "../hooks/useAuthContext"
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


  function CorpTrainee() {
    const paramss = new URLSearchParams(window.location.search);
    const crpid = paramss.get('userId');

    const navigate=useNavigate();
    const [query, setQuery] = useState("");
    const [courses,setCourses]=useState()
    const [selectedLanguages, setSelectedLanguages] = useState([])
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const {user} = useAuthContext()
    useEffect(() => {
      const fetchData = async () => {
            
      
        const x = {query};
        const response = await fetch('/api/courses/SearchCourseByOpt', {
          method: 'GET',
          body: JSON.stringify(x),
          headers: {
              'Content-Type' : 'application/json',
              
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



      const getindv=async()=>{
        const trainee={crpid}
        const response=await fetch('/api/corpTrainee/getOneTrainee',
        {
          method: 'post',
          body:JSON.stringify(trainee),
          headers: {
              'Content-Type' : 'application/json'
          
          }
      })
      const json=await response.json()
      console.log(json)
      if(response.ok){
        setName(json.corp_name)
        setEmail(json.corp_email)
        console.log("khalsona baa")
      }
      
      
      
      }
      getindv()






      if (query.length === 0 || query.length > 2) fetchData();
    }, [query]);

  return( 
   
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
      <div className= 'filter' >
        <CountryForm></CountryForm>
      </div>
    <div className="profilebody" >
      <SearchBar></SearchBar> 
      <p> </p>
      
      <p> </p>


      
 
      
    <button className="profilebutton"onClick={() => {window.location.href=`/corpchangepassword?userId=${user._id}`}}>Change password</button>
    
    <button className="profilebutton" onClick={()=>navigate("/Corpview")}>view all courses</button>
      
      <button className="profilebutton" onClick={()=>navigate("/Corpregisteredcourses")}>view registered courses</button>
      <button  className="profilebutton" onClick={()=>navigate("/corpviewreq")}>view requested courses</button>
      <br/>
  
    <button className="profilebutton" onClick={() => window.location.href=`/ReportsPage?user_id=${crpid}`}
        key={crpid}>View Reports
      </button>
  </div>
  </div>
  )
}

export default CorpTrainee;

