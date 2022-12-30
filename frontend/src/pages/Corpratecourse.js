import { Rating,Stack } from "@mui/material";
import React, { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext"
import { useNavigate, useParams } from "react-router-dom"
const Corpratecourse=()=>{
    const {user} = useAuthContext()
    const [course_rating,setRating]=useState(Number|null)
    const  [show,setShow]=useState(false)
    const[error , setError] = useState(null);
    const params = new URLSearchParams(window.location.search);
    const userId = params.get('userId');
    const navigate=useNavigate();
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
            setShow(true)
            console.log(json)
        
        }
    }

    return(
        <div className="pagesplain">
            <button className="back" onClick={() => navigate(-1)}> ❮ Back </button>

        <form className="create" onSubmit={handleSubmit}>
            <h2>Rate your course</h2>
        <Stack spacing={4}>
            <Rating value={course_rating} onChange={(event, newValue) => {
    setRating(newValue)}} precision={1} size='large'
             
            ></Rating>
            </Stack>
            <button> confirm your rating</button>
            <div>{show &&<p> your rating was added successfully</p>}</div>
            
            <p></p>
            <button onClick={()=>navigate("/Corpregisteredcourses")}>return to your courses</button>
            </form>
          </div>
     )

}
export default Corpratecourse