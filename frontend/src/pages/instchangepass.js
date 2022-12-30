import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext"
import rubixgif from '../assets/Rubix.gif';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";


const Instchangepasssword=()=>{
    const {user} = useAuthContext()
    
    const [instructor_pass,setPass]=useState('')
    const[shown,setShown]=useState(false)
    const[error , setError] = useState(null);
    const paramss = new URLSearchParams(window.location.search);
    const userId = paramss.get('userId');

    const handleSubmit = async(e) => {
        e.preventDefault()
       

        const inst={instructor_pass}

        const response=await fetch(`/api/instructors/changepassword?userId=${userId}`,{
            method: 'PUT',
            body:JSON.stringify(inst),
            headers: {
                'Content-Type' : 'application/json'
                
                
            }
        })

        const json = await response.json()
        if(!response.ok) {
            console.log('a7',instructor_pass)
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

<br></br>

    <form className="filter" onSubmit={handleSubmit}>
    <label>New Password: </label>
        <input
            type = "password"
            onChange={(e) => setPass(e.target.value)}
            value={instructor_pass}
        />
         <button>Change Password</button>
         <div>{shown &&<p> your password was changed successfully </p>}</div>
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

        
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
)
}
export default Instchangepasssword

