import { useAuthContext } from "../hooks/useAuthContext"
import { useEffect, useState } from "react"
import Registeredcoursedetails from "../components/Corpregisteredcoursedetails"
const Indvregistercourses =()=>{
    const {user} = useAuthContext()
    const [courses,setCourses]=useState('')
useEffect(()=>{
    const fetchcourses=async()=>{
        const response=await fetch('/api/corpTrainee/getregistercourses',
        {
            method:'GET',
            headers: {'Authorization': `Bearer ${user.token}`},
        })
        const json= await response.json()
        if(response.ok){
            setCourses(json)
            console.log(json)
            }
        
    }
    if (user) {
        fetchcourses()
          }
},[])
return(
<div className="app" >

{courses && courses.map((course) =>(
    <Registeredcoursedetails course={course} key={course._id} />))}
</div>
);
}
export default Indvregistercourses