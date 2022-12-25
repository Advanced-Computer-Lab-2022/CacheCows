import { useState,useEffect } from "react";
import { json } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext"

import { useNavigate, useParams } from "react-router-dom"

    const Corpregistered=()=>{
        const  [show,setShow]=useState(false)
        const [Appeal,setAppeal]=useState('')
        const params = new URLSearchParams(window.location.search);
        const userId = params.get('userId');
        const coursename=params.get('coursename');
        const {user} = useAuthContext()
        const navigate=useNavigate();
        //console.log(coursename)
        const handleSubmit = async(e) => {
            e.preventDefault()
            const corp={Appeal}

            const response=await fetch(`/api/corpTrainee/registercourse?userId=${userId}&coursename=${coursename}`,{
                method: 'POST',
                body:JSON.stringify(corp),
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
            <form className="create" onSubmit={handleSubmit} >
            <h2>Enter your Appeal</h2>
            <input type="text" 
            onChange={(e) => setAppeal(e.target.value)}
            value={Appeal}/>
            <button>confirm your appeal</button>
            <div>{show &&<p> congrats you are registered</p>}</div>
           <p ></p>
            <button onClick={()=>navigate("/Corpregisteredcourses")}>return to your courses</button>
            </form>
        )
    }
    export default Corpregistered