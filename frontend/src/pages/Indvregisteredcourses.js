import { useAuthContext } from "../hooks/useAuthContext"
import { useEffect, useState } from "react"
import Registeredcoursedetails from "../components/Registercoursedetails"
const Indvregistercourses =()=>{
    const {user} = useAuthContext()
    const [courses,setCourses]=useState('')
useEffect(()=>{
    const fetchcourses=async()=>{
        const response=await fetch('/api/indvtrainee/getregistercourses',
        {
            method:'GET',
            headers: {'Authorization': `Bearer ${user.token}`},
        })
        const json= await response.json()
        if(response.ok){
            setCourses(json)
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