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
import CourseCardUsers from "../components/CourseCardUsers";
import rubixgif2 from '../assets/Rubix2.gif';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import EditIcon from '@mui/icons-material/Edit';
import ReportIcon from '@mui/icons-material/Report';
import ReviewsIcon from '@mui/icons-material/Reviews';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
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

function IndTrainee() {
  const paramss = new URLSearchParams(window.location.search);
  const indvid = paramss.get('userId');

  const [query, setQuery] = useState("");
  const [courses, setCourses] = useState([]);
  const [error,setError]=useState(null)
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

const fetchcourses=async()=>{
  const response=await fetch('/api/indvtrainee/getregistercourses',
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
   
 <h3>My courses</h3>
 <br></br>

 <button className="profilebuttoninst" on onClick={() => {window.location.href=`/indvchangepassword?userId=${user._id}`}} 
    > <EditIcon sx={{ marginBottom : -1 , marginRight : 1 , color : '#a6607c' }} ></EditIcon> Change Password</button>
     

    <button className="profilebuttoninst" onClick={()=>window.location.href=`/viewwallet?userId=${indvid}`}> <MonetizationOnIcon sx={{ marginBottom : -1 , marginRight : 1 , color : '#a6607c' }} ></MonetizationOnIcon> My Wallet</button>
   
    <button className="profilebuttoninst" onClick={() => window.location.href=`/ReportsPage?user_id=${indvid}`}
        key={indvid}> <ReportIcon sx={{ marginBottom : -1 , marginRight : 1 , color : '#a6607c' }} ></ReportIcon>  My Reports
      </button>
      
      <button className="profilebuttoninst" onClick={()=>navigate("/Indvview")}> <SummarizeIcon sx={{ marginBottom : -1 , marginRight : 1 , color : '#a6607c' }} ></SummarizeIcon> All Courses</button>


      <div className="">

      

<Box >

<Grid container rowSpacing={4} columnSpacing={{ xs: 5, sm: 1, md: 5 }} sx={{ marginLeft : 35, marginTop : -62 }}>
            {courses && courses.map((course) =>(
          <Grid >
      <CourseCardUsers course={course} key={course._id} />
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