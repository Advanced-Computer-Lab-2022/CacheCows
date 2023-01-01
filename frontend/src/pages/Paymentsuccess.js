import { useEffect, useState } from "react"
import { useAuthContext } from "../hooks/useAuthContext"
import { useNavigate, useParams } from "react-router-dom"
import rubixgif2 from '../assets/Rubix2.gif';
import Box from '@mui/material/Box';
const Paymentsuccess=()=>{
    const  [show,setShow]=useState(false)
    const [rej,setRej]=useState(false)
    const params = new URLSearchParams(window.location.search);
    const course_id = params.get('course_id');
    const inst_id=params.get('inst_id')
    const course_price=params.get('course_price')
    const {user} = useAuthContext()
    const navigate=useNavigate();
    const flag=true
    useEffect(()=>{

  
 const register=async() => {
   //e.preventDefault()
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
        console.log(user.name)
        if(json==="success"){
            setShow(true)
            owed()
        }
        else{
          setRej(true)
        }
      
    }
   
 
}

const owed=async()=>{
    const response=await fetch(`/api/instructors/owed?inst_id=${inst_id}&course_price=${course_price}`,{
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json',
        }
     
       
    })
    const json = await response.json()
    console.log(json)
    if(response.ok){
        console.log("yes")
        
    }
}

if(user){
    register()
    
}
},[user])

//console.log("one")
 return(
    <div className="pagesplain">

<br></br>
                       
<button className="back" onClick={() => navigate(-1)}> ❮ Back </button>           
                        <div>{show &&<p> <h3>congrats you are registered</h3></p>}</div>
<div>{rej &&<p> <h3>Already registered</h3></p>}</div>

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
                        <br></br>
                        <br></br>
    </div>
 )
 
}
export default Paymentsuccess