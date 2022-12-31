import { useEffect, useState } from "react"
import { useAuthContext } from "../hooks/useAuthContext"
import { useNavigate, useParams } from "react-router-dom"

const Viewwallet=()=>{
    const [wallet,setWallet]=useState('')
    const {user} = useAuthContext()
    const navigate=useNavigate();
useEffect(()=>{
  const fetchwallet=async()=>{
    const response=await fetch('/api/indvtrainee/viewwallet',
    {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json',
            'Authorization': `Bearer ${user.token}`
        }

            
        })
        const json=await response.json()
        //console.log(user.token)
        if(response.ok){
            console.log("yes")
            setWallet(json)
        }
        if(!response.ok){
            //console.log(json)
            console.log(json)
        }

  }
  fetchwallet()
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
    <br></br>\
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