import { useEffect, useState } from "react"
import rubixgif2 from '../assets/Rubix2.gif';
import Box from '@mui/material/Box';
const Paycourse=()=>{
const [pay,setpay] = useState('')

const paramss = new URLSearchParams(window.location.search);
const course_name=paramss.get('course_name')
const course_price=paramss.get('course_price')
const course_id=paramss.get('course_id')
const inst_id=paramss.get('inst_id')

const payment = {course_name : course_name,
course_price : course_price}

const handleSubmit=async ()=>{
 const response =  await fetch(`/api/indvtrainee/paycourse?course_name=${course_name}&course_price=${course_price}&course_id=${course_id}&inst_id=${inst_id}`,{
        method:"POST",
        body : JSON.stringify(payment),
        headers:{'Content-Type' : 'application/json'}
    }
    )
    const json = await response.json()

    if(response.ok){
        //setpay(response)
        console.log(json)
        window.location=json
    }
    if(!response.ok){
        console.log("No payment: ",json)
      
    }
      
    
}
handleSubmit()
return(
    <div className="pagesplain">
        <h3>Please wait </h3>
   
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

export default Paycourse




   
    

