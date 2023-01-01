import { useEffect, useState } from "react"
import { useAuthContext } from "../hooks/useAuthContext"
import { useNavigate, useParams } from "react-router-dom"
import rubixgif from '../assets/Rubix.gif';
import Box from '@mui/material/Box';
const Viewwallet=()=>{
    const {user} = useAuthContext()
    const params = new URLSearchParams(window.location.search);
    const indv_id=params.get('userId')
    const navigate=useNavigate();
    const [wallet,setWallet]=useState('')
    useEffect(()=>{
        const getwallet=async()=>{
            const trainee={indv_id}
            const response=await  fetch('/api/indvtrainee/viewwallet', {
                method: 'POST',
                body:JSON.stringify(trainee),
                headers: {
                    'Content-Type' : 'application/json',
                  
                }
            })
            const json=await response.json()
            if(response.ok){
                console.log("yes")
                setWallet(json)
            }
            if(!response.ok){
                //console.log(json)
                console.log(json)
            }
            
        }
       getwallet()

        
                    
                
    },[user])
  return(
    <div className="pagesplain">

    <button className="back" onClick={() => navigate(-1)}> ❮ Back </button>
    
    <br></br>
    <h1><strong>Your balance:</strong>{wallet}</h1>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
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
export default Viewwallet