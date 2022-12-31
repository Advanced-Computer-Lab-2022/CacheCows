import { useEffect, useState } from "react"
import { useAuthContext } from "../hooks/useAuthContext"
import { useNavigate, useParams } from "react-router-dom"

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
    <div className="dashboardpage">

    <button className="back" onClick={() => navigate(-1)}> ❮ Back </button>
    
    <br></br>
    <h1><strong>Your balance:</strong>{wallet}</h1>
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
export default Viewwallet