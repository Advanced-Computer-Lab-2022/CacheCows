import { useEffect, useState } from "react"

// components

import AdminAddInstForm from "../components/AdminAddInstForm"
import InstructorDetails from "../components/InstructorDetails"

import AdminAddCrpTraineeForm from "../components/AdminAddCrpTraineeForm"
import CrpTraineeDetails from "../components/CrpTraineeDetails"

import AdminDetails from "../components/AdminDetails"
import AdminForm from "../components/AdminForm"


var Aflag = true;
var Cflag = false;
var Iflag = false;

const Admin = () => {
  const [admins, setadmins] = useState(null)

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
            const response = await fetch('/api/corpTrainee/getAllcrpTrainee')
            const json = await response.json()
      
            if (response.ok) {
                setcrpTrainee(json)
            }
          }
      
          fetchcorptrainees()
        }, [])
        

  
  if(Aflag){
    return (
      <div className="Admin">
        <div className="All admins">
        <button onClick={() => {
          Aflag = false;
          Cflag = true;
        }} > Click Me </button>
          {admins && admins.map((admin) => (
            <AdminDetails admin={admin} key={admin._id} />
          ))}
        </div> 
        <AdminForm />
      </div>
      )
    }

  if(Cflag){
    return(
      <div>
      <div className="All Corporate Trainees">
        {crptrainees && crptrainees.map((crptrainee) => (
          <CrpTraineeDetails crptrainee={crptrainee} key={crptrainee._id} />
        ))}
      </div> 
      <AdminAddCrpTraineeForm />
      </div>
    )
  }

  if(Iflag){
    return(
      <div>
      <div className="All Instructors">
        {instructors && instructors.map((instructor) => (
          <InstructorDetails instructor={instructor} key={instructor._id} />
        ))}
      </div> 
      <AdminAddInstForm />
      </div>
    )
  }
  }


export default Admin