import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";


// components

import AdminAddInstForm from "../components/AdminAddInstForm"
import InstructorDetails from "../components/InstructorDetails"

import AdminAddCrpTraineeForm from "../components/AdminAddCrpTraineeForm"
import CrpTraineeDetails from "../components/CrpTraineeDetails"



import AdminDetails from "../components/AdminDetails"
import AdminForm from "../components/AdminForm"

import CustomSelect from "../components/CustomSelect"
import SearchBar from "../components/SearchBar";

import Countryform from "../components/CountryForm";
import { useAuthContext } from "../hooks/useAuthContext";

import SellIcon from '@mui/icons-material/Sell';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ReportIcon from '@mui/icons-material/Report';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { Report } from "@material-ui/icons";

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

const Admin = () => {
  const navigate=useNavigate();
  const paramss = new URLSearchParams(window.location.search);
  const admin_id = paramss.get('userId');

  const {user} = useAuthContext();

  
  const [admins, setadmins] = useState(null)
  const [selectedLanguages, setSelectedLanguages] = useState([])

  useEffect(() => {
    const fetchadmins = async () => {
      const response = await fetch('/api/admins/getadmins')
      const json = await response.json()

      if (response.ok) {
        setadmins(json)
      }
    }


    fetchadmins()
  }, [])
///////////////////////////////////////////////////////////
    const [instructors, setinstructors] = useState(null)
  
    useEffect(() => {
      const fetchinstructors = async () => {
        const response = await fetch('/api/admins/getInstructors')
        const json = await response.json()
  
        if (response.ok) {
          setinstructors(json)
        }
      }
  
      fetchinstructors()
    }, [])
///////////////////////////////////////////////////////////
    const [crptrainees, setcrpTrainee] = useState(null)
      
        useEffect(() => {
          const fetchcorptrainees = async () => {
            const response = await fetch('/api/admins/getAllcrpTrainee')
            const json = await response.json()
      
            if (response.ok) {
                setcrpTrainee(json)
            }
          }
      
          fetchcorptrainees()
        }, [])
        

  
    return (
      <div>


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
    <br></br>  <br></br>
    <br></br>
    <br></br>
    <br></br><br></br>  <br></br>
    <br></br>
    <br></br>
    <br></br><br></br>  <br></br>
   

 


      <h1> Admin!</h1>
      <br></br>


      <body className="biobody"> Email : </body>
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
<br></br>
    <br></br>
    <br></br>
    <br></br>
<div>
  <h3> My Workspace </h3>
  <br></br>
  <br></br>

<button className="buttonadmin"
        onClick={() => {
          navigate("/");
        }}
      >
        <LibraryBooksIcon sx={{ marginBottom : -1 , marginRight : 1 , color : '#fff' }} ></LibraryBooksIcon>
        Check All Courses
      </button>
    
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button className="buttonadmin"
        onClick={() => window.location.href=`/AdminReportPage?admin_id=${user._id}`}
      >
<ReportIcon sx={{ marginBottom : -1 , marginRight : 1 , color : '#fff' }} ></ReportIcon>        Check All Reports
      </button>

      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


      <button className="buttonadmin"
        onClick={() => window.location.href=`/AdminPromo?admin_id=${user._id}`}
      >
<SellIcon sx={{ marginBottom : -1 , marginRight : 1 , color : '#fff' }} ></SellIcon>        Add Promotions
      </button>

      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

      <button className="buttonadmin" onClick={()=>{navigate("/viewcourserequests")}}>
      <AddTaskIcon sx={{ marginBottom : -1 , marginRight : 1 , color : '#fff' }} ></AddTaskIcon>View Courses Requests</button>


  </div>





      <div className="Admin">  
      <br></br>
    <br></br>
    <br></br>
    <br></br>  
        <h3> All Admins</h3>
        <br></br>

        <div className="All-Admins">
          {admins && admins.map((admin) => (
            <AdminDetails admin={admin} key={admin._id} />
          ))}
                <br></br>
                <br></br>

       
        </div>
        <br></br>
        <br></br>

        <div className="filter">
        <AdminForm />
        </div>
 
        <br></br>
        <br></br>
        <br></br>

      
      <h3>All Corporate Trainees</h3>
      <br></br>

      <div className="All-Admins">
        {crptrainees && crptrainees.map((CrpTrainee) => (
          <CrpTraineeDetails CrpTrainee={CrpTrainee} key={CrpTrainee._id} />
        ))}
              <br></br>
              <br></br>

      
      </div>
      <br></br>
      <br></br>

      <div className="filter">
      <AdminAddCrpTraineeForm />
      </div>

      <br></br>
      <br></br>
      <br></br>
      


      <h3>All Instructors</h3>
      <br></br>
      <div className="All-Admins">
        {instructors && instructors.map((instructor) => (
          <InstructorDetails instructor={instructor} key={instructor._id} />
        ))}
              <br></br>
              <br></br>

      </div> 
      <br></br>
      <br></br>

      
      </div>
      <div className="filter">
      <AdminAddInstForm />
      </div>
      <br/>

     

      
      </div>



      

      
    )

  }


export default Admin