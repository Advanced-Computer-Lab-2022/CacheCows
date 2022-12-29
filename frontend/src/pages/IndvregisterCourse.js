import { useState,useEffect } from "react";
import { json } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext"
import { useNavigate, useParams } from "react-router-dom"
import rubixgif from '../assets/Rubix.gif';
import Box from '@mui/material/Box';
    

    const Indvregistered=()=>{
        const  [show,setShow]=useState(false)
        const [appeal,setAppeal]=useState('')
        const params = new URLSearchParams(window.location.search);
        const course_id = params.get('course_id');
        const {user} = useAuthContext()
        const navigate=useNavigate();
        console.log(course_id)
        const handleSubmit = async(e) => {
            e.preventDefault()
            const indv={course_id}

            const response=await fetch('/api/indvtrainee/registercourse',{
                method: 'POST',
                body:JSON.stringify(indv),
                headers: {
                    'Content-Type' : 'application/json',
                    'Authorization': `Bearer ${user.token}`
                    
                }
               
            })
            const json = await response.json()
            console.log(json)
            if(response.ok){
                setShow(true)
                setAppeal('')
                

            }
        }

        return(
            <div className="pagesplain">

<br></br>

            <form className="create" onSubmit={handleSubmit} >
            <h2>Enter your Appeal</h2>
            <input type="text" 
            onChange={(e) => setAppeal(e.target.value)}
            value={appeal}/>
            <button>confirm your appeal</button>
            <div>{show &&<h1> Congrats You Have Registered! </h1>}</div>
           <p ></p>
            <button onClick={()=>navigate("/Indvregistercourses")}>return to your courses</button>
            </form>
            <br></br>
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
        </div>

        )
    }
    export default  Indvregistered