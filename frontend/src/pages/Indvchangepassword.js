import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext"
import rubixgif from '../assets/Rubix.gif';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";




const Indvchangepasssword=()=>{
    const {user} = useAuthContext()
    const[shown,setShown]=useState(false)
    
    const [indv_pass,setPass]=useState('')
    const[error , setError] = useState(null);
    const paramss = new URLSearchParams(window.location.search);
    const userId = paramss.get('userId');
   

    const handleSubmit = async(e) => {
        e.preventDefault()
       

        const indv={indv_pass}

        const response=await fetch(`/api/indvtrainee/changepassword?userId=${userId}`,{
            method: 'PUT',
            body:JSON.stringify(indv),
            headers: {
                'Content-Type' : 'application/json'
                
                
            }
        })

        const json = await response.json()
        if(!response.ok) {
            console.log('a7',indv_pass)
            setError(json.error)
        }
        if(response.ok) {
            setPass('');
            setError(null);
            setShown(true)
            console.log(json)
        
        }
    }





    const navigate=useNavigate();

return(
    <div className="pagesplain">
        <button className="back" onClick={() => navigate(-1)}> ❮ Back </button>
                <br></br>
                <br></br>

   <form className="filter" onSubmit={handleSubmit}>
    <label>New Password: </label>
        <input
            type = "password"
            onChange={(e) => setPass(e.target.value)}
            value={indv_pass}
        />
         <button>Change Password</button>
         <div>{shown &&<p><h1> your password was changed successfully </h1></p>}</div>
        {error && <div className="error">{error}</div>}
        </form>

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
export default Indvchangepasssword