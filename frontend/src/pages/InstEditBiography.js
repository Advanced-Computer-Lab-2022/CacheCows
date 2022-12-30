import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext"
import rubixgif from '../assets/Rubix.gif';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";



const InstEditBiography=()=>{
    const {user} = useAuthContext()

    const[instructor_biography,setBio]=useState('');
   // const[inst_id,setID]=useState('');
    const[error , setError] = useState(null);
    const paramss = new URLSearchParams(window.location.search);

    const userId = paramss.get('userId');

    

    const handleSubmit = async(e) => {
        e.preventDefault()

     //   setID(JSON.stringify(user._id))

        const inst = {
            instructor_biography
        }


        const response = await fetch(`/api/instructors/InstructorEditBiography?userId=${userId}`, {
            method: 'POST',
            body: JSON.stringify(inst),
            headers: {
                'Content-Type' : 'application/json',
              //  'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()
if(!response.ok) {
    console.log(inst)
    setError(json.error)
}
if(response.ok) {
    setBio('');
    setError('Biography Updated Successfully!');
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
    <label>New Biography: </label>
        <input
            type = "text"
            onChange={(e) => setBio(e.target.value)}
            value={instructor_biography}
        />
         <button>Change my Biography</button>
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
export default InstEditBiography
    
