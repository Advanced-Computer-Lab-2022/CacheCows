import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext"
import { useNavigate, useParams } from "react-router-dom"
import rubixgif from '../assets/Rubix.gif';
import Box from '@mui/material/Box';

const Indvreview=()=>{
    const {user} = useAuthContext()
    
    const [review,setReview]=useState('')
    const [username,setname]=useState('')
    const  [show,setShow]=useState(false)
    const[error , setError] = useState(null);
    const params = new URLSearchParams(window.location.search);
    const userId = params.get('userId');
    const navigate=useNavigate();

    const handleSubmit = async(e) => {
        setname(user.name);
        e.preventDefault()
       

        const indv={review}

        const response=await fetch(`/api/indvtrainee/reviewinst?userId=${userId}`,{
            method: 'POST',
            body:JSON.stringify(indv),
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': `Bearer ${user.token}`
                
            }
        })

        const json = await response.json()
        if(!response.ok) {
            
            setError(json.error)
        }
        if(response.ok) {
            setReview('');
            setShow(true);
            setError(null);
            console.log(json)
        
        }
    }






return(
    <div className="pagesplain">
        <button className="back" onClick={() => navigate(-1)}> ❮ Back </button>
   <form className="filter" onSubmit={handleSubmit}>
    <label>Add your review: </label>
        <input
            type = "text"
            onChange={(e) => setReview(e.target.value)}
            value={review}
        />
         <button>Add review</button>
         <div>{show &&<p> your review was added successfully</p>}</div>
         <p></p>
            <button onClick={()=>navigate("/Indvregistercourses")}>return to your courses</button>
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
</div>

)
}
export default Indvreview

