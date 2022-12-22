import { useState,useEffect } from "react";
import { json } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext"
import { useNavigate, useParams } from "react-router-dom"
    

    const Indvregistered=()=>{
        const  [show,setShow]=useState(false)
        const [appeal,setAppeal]=useState('')
        const params = new URLSearchParams(window.location.search);
        const userId = params.get('userId');
        const {user} = useAuthContext()
        const navigate=useNavigate();
        console.log(userId)
        const handleSubmit = async(e) => {
            e.preventDefault()
            const indv={userId}

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
            <form className="create" onSubmit={handleSubmit} >
            <h2>Enter your Appeal</h2>
            <input type="text" 
            onChange={(e) => setAppeal(e.target.value)}
            value={appeal}/>
            <button>confirm your appeal</button>
            <div>{show &&<p> congrats you are registered</p>}</div>
           <p ></p>
            <button onClick={()=>navigate("/Indvregistercourses")}>return to your courses</button>
            </form>
        )
    }
    export default  Indvregistered