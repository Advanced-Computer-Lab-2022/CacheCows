import { useEffect, useState } from "react"

// components

import AdminAddInstForm from "../components/AdminAddInstForm"
import InstructorDetails from "../components/InstructorDetails"

import AdminAddCrpTraineeForm from "../components/AdminAddCrpTraineeForm"
import CrpTraineeDetails from "../components/CrpTraineeDetails"

import AdminDetails from "../components/AdminDetails"
import AdminForm from "../components/AdminForm"

import CustomSelect from "../components/CustomSelect"
import SearchBar from "../components/SearchBar";

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
        const response = await fetch('/api/instructors/getinstructors')
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
            const response = await fetch('/api/corpTrainee/alltrainees')
            const json = await response.json()
      
            if (response.ok) {
                setcrpTrainee(json)
            }
          }
      
          fetchcorptrainees()
        }, [])
        

  
    return (
      <div className="Admin">
        <SearchBar></SearchBar>
        
        <strong></strong>
        <div className="All-Admins">
          {admins && admins.map((admin) => (
            <AdminDetails admin={admin} key={admin._id} />
          ))}
        </div> 
        <AdminForm />
 
      

      <div className="All-CorporateTrainees">
        {crptrainees && crptrainees.map((CrpTrainee) => (
          <CrpTraineeDetails CrpTrainee={CrpTrainee} key={CrpTrainee._id} />
        ))}
      </div> 
      <AdminAddCrpTraineeForm />



      <div className="All-Instructors">
        {instructors && instructors.map((instructor) => (
          <InstructorDetails instructor={instructor} key={instructor._id} />
        ))}
      </div> 
      <AdminAddInstForm />
        <CustomSelect title="Select your country:" value={selectedLanguages} onChange={(v) => setSelectedLanguages(v)} options={languages}/>
      </div>
    )

  }


export default Admin