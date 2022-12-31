import { useEffect, useState } from "react"
import { useAuthContext } from "../hooks/useAuthContext"
import { useNavigate, useParams } from "react-router-dom"
import rubixgif2 from '../assets/Rubix2.gif';
import Box from '@mui/material/Box';
const Viewbalance=()=>{
    const [owed,setOwed]=useState('')
    const params = new URLSearchParams(window.location.search);
    const inst_id=params.get('inst_id')
    const navigate=useNavigate();
useEffect(()=>{
  const fetchowed=async()=>{
    const response=await fetch(`/api/instructors/viewowed?inst_id=${inst_id}`,
    {
        method: 'GET',
       
        headers: {
            'Content-Type' : 'application/json',
            
        }
            
        })
        const json=await response.json()
        console.log(json)
        if(response.ok){
            setOwed(json)
        }
        if(!response.ok){
            console.log(json)
            console.log("error")
        }

  }
  fetchowed()
},[])
return(
<div className="dashboardpage">

<button className="back" onClick={() => navigate(-1)}> ❮ Back </button>

<br></br>
<h1><strong>Your balance:</strong>{owed}</h1>
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
    <br></br>  <br></br>
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
    <br></br>  <br></br>
    <br></br>
    <br></br>
    <br></br>
</div>
)
}
export default Viewbalance