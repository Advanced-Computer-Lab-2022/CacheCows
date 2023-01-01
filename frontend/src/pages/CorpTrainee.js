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
import Registeredcoursedetails from "../components/Corpregisteredcoursedetails"
import Grid from '@mui/material/Unstable_Grid2';
import EditIcon from '@mui/icons-material/Edit';
import ReportIcon from '@mui/icons-material/Report';
import ReviewsIcon from '@mui/icons-material/Reviews';
import AddTaskIcon from '@mui/icons-material/AddTask';
import SummarizeIcon from '@mui/icons-material/Summarize';


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
    const [error,setError]=useState(null)
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


      const fetchcourses=async()=>{
        const response=await fetch('/api/corpTrainee/getregistercourses',
        {
            method:'GET',
            headers: {'Authorization': `Bearer ${user.token}`},
        })
        const json= await response.json()
        if(response.ok){
            setCourses(json)
            setError(null)
            console.log(json)

        }
        if(!response.ok){
            setCourses('')
            setError(json.error)
            console.log(json.error)
        }
    }
    fetchcourses()



      if (query.length === 0 || query.length > 2) fetchData();
    }, [user]);

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
    <br></br>
    <br></br>

    <h1> {name}</h1>
      <br></br>


      <body className="biobody"> Email : {email}</body>
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
     

  
      <br/>
    <div  className="profilebody" >
    <br></br>
    <br></br>
    <h2 className="h8"> My Workspace </h2>
    <br></br>
   
      <h1>My courses</h1>
      <p> </p>
      
      <p> </p>


      
 
      
    <button className="profilebuttoninst"onClick={() => {window.location.href=`/corpchangepassword?userId=${user._id}`}}> <EditIcon sx={{ marginBottom : -1 , marginRight : 1 , color : '#a6607c' }} ></EditIcon> Change password</button>
    
      
      
      <button  className="profilebuttoninst" onClick={()=>navigate("/corpviewreq")}> <AddTaskIcon sx={{ marginBottom : -1 , marginRight : 1 , color : '#a6607c' }} ></AddTaskIcon> My Requests</button>
      <br/>
  
    <button className="profilebuttoninst" onClick={() => window.location.href=`/ReportsPage?user_id=${crpid}`}
        key={crpid}><ReportIcon sx={{ marginBottom : -1 , marginRight : 1 , color : '#a6607c' }} ></ReportIcon>  My Reports
      </button>
      <button className="profilebuttoninst" onClick={()=>navigate("/Corpview")}> <SummarizeIcon sx={{ marginBottom : -1 , marginRight : 1 , color : '#a6607c' }} ></SummarizeIcon>  All Courses</button>


     

      
<div>
<Box >

<Grid container rowSpacing={4} columnSpacing={{ xs: 5, sm: 1, md: 5 }} sx={{ marginLeft : 35, marginTop : -60 }}>
            {courses && courses.map((course) =>(
          <Grid >
      <Registeredcoursedetails course={course} key={course._id} />
    </Grid> ))}
</Grid>
</Box> 
 
</div>
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
  </div>
 
  )
}

export default CorpTrainee;

