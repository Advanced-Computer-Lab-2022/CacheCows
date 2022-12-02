import { Rating,Stack } from "@mui/material";
import React, { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext"

const Corpratecourse=()=>{
    const {user} = useAuthContext()
    const [course_rating,setRating]=useState(Number|null)
    const[error , setError] = useState(null);
    const params = new URLSearchParams(window.location.search);
    const userId = params.get('userId');
 
    const handleSubmit = async(e) => {
        e.preventDefault()
       
      
        
        const corp={course_rating}
        const response=await fetch(`/api/corpTrainee/rateCourse?userId=${userId}`,{
            method: 'PUT',
            body:JSON.stringify(corp),
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': `Bearer ${user.token}`
                
            }
            
            
        })
        const json = await response.json()
        if(!response.ok) {
            console.log(course_rating)

            setError(json.error)
        }
        if(response.ok) {
            setRating('');
            setError(null);
            console.log(json)
        
        }
    }
    return(
        
        <form className="create" onSubmit={handleSubmit}>
        <Stack spacing={4}>
            <Rating value={course_rating} onChange={(event, newValue) => {
    setRating(newValue)}} precision={1} size='large'
             
            ></Rating>
            </Stack>
            <button> confirm your rating</button>
            </form>
          
     )

}
export default Corpratecourse