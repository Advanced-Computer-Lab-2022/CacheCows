import { Rating,Stack } from "@mui/material";
import React, { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext"
import { useNavigate, useParams } from "react-router-dom"
import rubixgif from '../assets/Rubix.gif';
import Box from '@mui/material/Box';
const Indvratecourse=()=>{
    const {user} = useAuthContext()
    const [course_rating,setRating]=useState(Number|null)
    const  [show,setShow]=useState(false)
    const[error , setError] = useState(null);
    const params = new URLSearchParams(window.location.search);
    const userId = params.get('userId');
    const navigate=useNavigate();
    const handleSubmit = async(e) => {
        e.preventDefault()
       
      
        
        const indv={course_rating}
        const response=await fetch(`/api/indvtrainee/rateCourse?userId=${userId}`,{
            method: 'PUT',
            body:JSON.stringify(indv),
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
            setShow(true)
            setError(null);
            console.log(json)
        
        }
    }

    return(
        <div>
            <button className="back" onClick={() => navigate(-1)}> ❮ Back </button>

<br></br>
<br></br>
<br></br>

        <form className="filter" onSubmit={handleSubmit} >
            <h1>Rate Course</h1>
        <Stack spacing={4}>
            <Rating className="course_details" value={course_rating} onChange={(event, newValue) => {
            setRating(newValue)}} precision={1} size='large'
             
            ></Rating>
            </Stack>
            <button   > Confirm Rating</button>
            <div>{show &&<p><h1> Your Rating was Added Successfully</h1></p>}</div>
            
                <p></p>
         
            
            {error && <div className="error">{error}</div>}
            </form>
            <div>
            
            <Box
    component="img"
    sx={{ height: 438, width: 825 , padding : 0, margins: 0}}
    alt="Logo"
    src={rubixgif}
    />
    </div>
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
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    </div>

          
     )

}
export default Indvratecourse