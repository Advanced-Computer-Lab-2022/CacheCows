import { useState,useEffect } from "react";
import { Await, json } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext"
import CorpviewRequests from "../components/Corpviewrequests";
import { useNavigate, useParams } from "react-router-dom"
import rubixgif from '../assets/Rubix.gif';
import Box from '@mui/material/Box';
    const Corpregistered=()=>{
        const  [show,setShow]=useState(false)
        const [Appeal,setAppeal]=useState('')
        const [request,setRequest]=useState('')
        const [shown,setShown]=useState(false)
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
                if(json==="already registered"){
                    setAppeal('')
                    setShown(true)
                }
                else{
                    setRequest(json)
                    setShow(true)
                    setAppeal('')
                }
               
                
                
            
            }
            else{
                console.log(corp)
            }

         
        }
        
        
 
           

        return(
            <div className="pagesplain">
                
            <button className="back" onClick={() => navigate(-1)}> ❮ Back </button>
         
            <form onSubmit={handleSubmit} >
            <p><h3>        Enter your Appeal</h3></p>
            <input type="text" 
            onChange={(e) => setAppeal(e.target.value)}
            value={Appeal}/>
            <button >confirm your appeal</button>
            <div>{show &&<p><h1> your request is pending </h1></p>}</div>
            <div>{shown &&<p><h1> already registered </h1></p>}</div>
           <p ></p>
           <div className="inst-details"  >

{show &&<p>
<p><h3> Your request details</h3></p>
<p><strong>Traniee Name: </strong>{request.trainee_name}</p>
<p><strong>course Title: </strong>{request.course_name}</p>
        <p><strong>Appeal: </strong>{request.appeal}</p>
        </p>}

      </div>

           
            </form>
            <div>
            
            <Box
    component="img"
    sx={{ height: 438, width: 825 , padding : 0, margins: 0}}
    alt="Logo"
    src={rubixgif}
    />
    </div>
            <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
     
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
            </div>
        )
    }
    export default Corpregistered