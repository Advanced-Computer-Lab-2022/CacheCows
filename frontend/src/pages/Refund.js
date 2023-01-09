import { useEffect, useState } from "react"
import rubixgif from '../assets/Rubix.gif';
import Box from '@mui/material/Box';
import { useAuthContext } from "../hooks/useAuthContext"
import { useNavigate, useParams } from "react-router-dom"
const Refund=()=>{
    
    const  [show,setShow]=useState(false)
    const [rej,setRej]=useState(false)
    const params = new URLSearchParams(window.location.search);
    const course_id = params.get('course_id');
    const inst_id=params.get('inst_id')
    const {user} = useAuthContext()
    const navigate=useNavigate();
   // console.log(user.token)
useEffect(()=>{


const refund=async(e)=>{
    //e.preventDefault()
    console.log(user.token)
    const response=await fetch(`/api/indvtrainee/refund?course_id=${course_id}&inst_id=${inst_id}`,{
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json',
            'Authorization': `Bearer ${user.token}`
            
        }
       
    })
    const json=await response.json()
    if(response.ok){
        if(json==="cannnot refund course progress exceeded 50%"){
            setRej(true)
        }
      
    
    else{
        setShow(true)
    }
}
}

    refund()

},[user])

return(
    <div className="pagesplain">
         <button className="back" onClick={() => navigate(-1)}> ❮ Back </button>

<div>{show &&<p><h1> Refund was made Successfully </h1></p>}</div>
<div>{rej &&<p><h1> Can not refund course, your progress exceeded 50 percent </h1></p>}</div>
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

    </div>
)
}
export default Refund