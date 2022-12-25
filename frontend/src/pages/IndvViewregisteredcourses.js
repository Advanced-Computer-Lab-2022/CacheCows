import { useAuthContext } from "../hooks/useAuthContext"
import { useEffect, useState } from "react"
import Registeredcoursedetails from "../components/Registercoursedetails"
const Indvregistercourses =()=>{
    const {user} = useAuthContext()
    const [courses,setCourses]=useState('')
    const [error,setError]=useState(null)
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
            setError(null)
            console.log(json)

        }
        if(!response.ok){
            setCourses('')
            setError(json.error)
            console.log(json.error)
        }
        
    }
    if (user) {
        fetchcourses()
          }
},[user])
return(
<div className="app" >

{courses && courses.map((course) =>(
<Registeredcoursedetails course={course} key={course._id} />))}

{error && <div className="error">{error}</div>}
</div>
);
}
export default Indvregistercourses