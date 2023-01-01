import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext"
import { useNavigate } from "react-router-dom";

import rubixgif from '../assets/Rubix.gif';
import Box from '@mui/material/Box';

const Cropchangepasssword=()=>{
    const {user} = useAuthContext()
    const[shown,setShown]=useState(false)
    const [corp_pass,setPass]=useState('')
    const[error , setError] = useState(null);
    const paramss = new URLSearchParams(window.location.search);
    const userId = paramss.get('userId');


    const handleSubmit = async(e) => {
        e.preventDefault()
       

        const corp={corp_pass}

        const response=await fetch(`/api/corpTrainee/changepassword?userId=${userId}`,{
            method: 'PUT',
            body:JSON.stringify(corp),
            headers: {
                'Content-Type' : 'application/json'
                
                
            }
        })

        const json = await response.json()
        if(!response.ok) {
            console.log(corp_pass)
            setError(json.error)
        }
        if(response.ok) {
            setPass('');
            setShown(true)
            setError(null);
            console.log(json)
        
        }
    }
    const navigate=useNavigate();

return(
    <div className="pagesplain">
            <button className="back" onClick={() => navigate(-1)}> ❮ Back </button>


 
    <form className="filter" onSubmit={handleSubmit}>
    <label>New Password: </label>
        <input
            type = "password"
            onChange={(e) => setPass(e.target.value)}
            value={corp_pass}
        />
         <button>Change Password</button>
         <div>{shown &&<p> <h1>your password was changed successfully </h1> </p>}</div>
        {error && <div className="error">{error}</div>}
        </form>
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
export default Cropchangepasssword