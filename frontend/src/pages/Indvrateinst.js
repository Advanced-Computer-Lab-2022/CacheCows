import { Rating,Stack } from "@mui/material";
import React, { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext"
import { useNavigate, useParams } from "react-router-dom"
const Indvrate=()=>{
    const {user} = useAuthContext()
    const [instructor_rate,setRating]=useState(Number|null)
    const  [show,setShow]=useState(false)
    const[error , setError] = useState(null);
    const params = new URLSearchParams(window.location.search);
    const userId = params.get('userId');
    const navigate=useNavigate();
    const flag=false
    const handleSubmit = async(e) => {
        e.preventDefault()
       
      
        
        const indv={instructor_rate}
        const response=await fetch(`/api/indvtrainee/rateinstructor?userId=${userId}`,{
            method: 'PUT',
            body:JSON.stringify(indv),
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': `Bearer ${user.token}`
                
            }
            
            
        })
        const json = await response.json()
        if(!response.ok) {
            console.log(instructor_rate)

            setError(json.error)
        }
        if(response.ok) {
            setRating('');
            setShow(true)
            setError(null);
            console.log(instructor_rate)
        
        }
    }
    return(
        
        <form className="create" onSubmit={handleSubmit}>
            <h2>Rate your instructor</h2>
        <Stack spacing={50}>
            <Rating value={instructor_rate} onChange={(event, newValue) => {
    setRating(newValue)}} precision={1} size='large'
             
            ></Rating>
            </Stack>
            
            <button > confirm your rating</button>
            <div>{show &&<p> your rating was added successfully</p>}</div>
           <p ></p>
            <button onClick={()=>navigate("/Indvregistercourses")}>return to your courses</button>
            </form>
          
     )

}
export default Indvrate