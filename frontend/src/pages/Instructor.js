
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseDetailsInst from "../components/CourseDetailsInst"
import CourseForm from "../components/CourseForm"
import CountryForm from "../components/CountryForm"
import CustomSelect from "../components/CustomSelect"
import SearchBar from "../components/SearchBar";
import { useAuthContext } from "../hooks/useAuthContext"
import FForminst from "../components/FilterForm";
import rubixgif from '../assets/Rubix.gif';
import Box from '@mui/material/Box';



import SearchBarInst from "../components/SearchBarInst";
import NewCourses from "./NewCourses";
import Grid from '@mui/material/Unstable_Grid2';
import CourseCard from "../components/CourseCard";

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


const Instructor=  ()=>{
  const paramss = new URLSearchParams(window.location.search);
  const instid = paramss.get('userId');

  const {user} = useAuthContext();
  //const [type,setType]=useState()
  const [courses,setCourses]=useState()
  const [selectedLanguages, setSelectedLanguages] = useState([])
  const [filter,setFilter]=useState()
  const [filtered,setFiltered]=useState()
  const [error , setError] = useState(null);
  const [Cflag , setCflag] = useState(false);
  const [Sflag , setSflag] = useState(false);
  const [Fflag , setFflag] = useState(false);
  const [username , setname] = useState('');
  const [instructor_email , setEmail] = useState('');
  const [instructor_biography , setBio] = useState('');


  function SearchOn() {
    setSflag(true);
    setCflag(false);
    setFflag(false);
  }

  function FilterOn() {
    setSflag(false);
    setCflag(false);
    setFflag(true);
  }

  function CourseOn() {
    setSflag(false);
    setCflag(true);
    setFflag(false);
  }

  

  
  


useEffect(()=>{ 

    const fetchCourses=async ()=>{
      const params = new URLSearchParams(window.location.search);
      const instructor_id = params.get('userId');
      const inst = {instructor_id : instructor_id};
      setname(user.name);
      setEmail(user.email);
      setBio(user.biography)

        const response= await fetch('/api/courses/getInstCourses',{
          method: 'POST',
          body: JSON.stringify(inst),
          headers: {
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${user.token}`},
        })
        const json= await response.json()

        if(user.type === "instructor"){
          setError(null)
        }else{
         setError({error : "Access Denied"})
        }

        if(response.ok){
        setCourses(json)
        console.log('NO Courses',error)
        }
        if(!response.ok){
          console.log('NO Courses',JSON.stringify(user._id))
          }
    }
    if (user) {
      fetchCourses()
        }
    
},[error,user])

const handleSubmit = async(e) => {
  e.preventDefault()
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
    <div className="">

      

        
      <div className="bio">
      <h1>Hello, {username}!</h1>
      <body className="biobody"> Biography : {instructor_biography}</body>
      <button className="editbiobutton" onClick={() => window.location.href=`/InstEditBiography?userId=${user._id}`}>Edit</button>

      <body className="biobody"> Email : {instructor_email}</body>
      <button className="editemailbutton" onClick={() => window.location.href=`/InstEditEmail?userId=${user._id}`}>Edit</button>
      <br></br>

      <button onClick={() => window.location.href=`/instchangepassword?userId=${user._id}`}>change Password</button>

    <br></br>
    <br></br>

      
    <div className = "buttoncolor" onClick={()=>{
      navigate("/AddCourse");
      }}>Add Course</div>


      
      <br/>
      <br/>
      <button className = "instructorbutton" onClick={() => window.location.href=`/ReportsPage?user_id=${instid}`}
        key={instid}>View Reports
      </button>

      &nbsp;&nbsp;&nbsp;

      <button className="instructorbutton" onClick={() => window.location.href=`/ireviews?user_id=${instid}`}
        key={instid}>View Reviews
      </button>
      </div>



   <div className="instructorbuttons">
     
     

      <br/>
      <button onClick={() => window.location.href=`/NewCourses?user_id=${instid}`}
        key={instid}>New Style
      </button>
   
    </div>

    

    <br/>
    <br/>

      <FForminst></FForminst>
      <br/>
      <br/>

     <div className="filter"> 

     <SearchBarInst></SearchBarInst>
     <br/>
     <br/>
     </div>

     <br/>
     <br/>

     <div className=""> 
     <h3> Courses: </h3>
     <Box >
      <Grid container rowSpacing={4} columnSpacing={{ xs: 7, sm: 2, md: 7 }} sx={{ marginLeft : 11, }}>
            {courses && courses.map((course) =>(
          <Grid >
            <CourseCard course={course} key={course._id} sx={{
            bgcolor: 'background.paper',
            boxShadow: 1,
            borderRadius: 2,
            p: 2,
            minWidth: 300,
            display : "inline",
            border : 2
          }}/>
          </Grid> ))}
      </Grid>
    </Box>            
    </div>
    <div className='filter'>
    <CountryForm/>
    </div>
    <br/>

    <div className="filter">
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        {" "}
        Check All Courses!
      </button>
      </div>
      <br />
      
</div>


 )

}
export default Instructor


