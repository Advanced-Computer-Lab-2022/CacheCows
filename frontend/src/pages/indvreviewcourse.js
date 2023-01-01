import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext"
import { useNavigate, useParams } from "react-router-dom"
import rubixgif from '../assets/Rubix.gif';
import Box from '@mui/material/Box';

const Revcourse=()=>{
    const {user} = useAuthContext()
    
    const [review,setReview]=useState('')
    const [username,setname]=useState('')
    const  [show,setShow]=useState(false)
    const[reject,setReject]=useState(false)
    const[error , setError] = useState(null);
    const params = new URLSearchParams(window.location.search);
    const userId = params.get('userId');
    const navigate=useNavigate();

    const handleSubmit = async(e) => {
        setname(user.name);
        e.preventDefault()
       

        const indv={review,username}

        const response=await fetch(`/api/indvtrainee/reviewcourse?userId=${userId}`,{
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
            if(json==="already added review "){
                setReject(true)
                setReview('');
            setname('')
            setError(null);
            }
            else{

            
            setReview('');
            setname('')
            setShow(true);
            setError(null);
            console.log(json)
            }
        
        }
    }






return(
    <div className="pagesplain">
        <button className="back" onClick={() => navigate(-1)}> ❮ Back </button>
   <form className="filter" onSubmit={handleSubmit}>
   <h1>Review Course</h1>
   <label><h1>Enter your username:</h1> </label>
        <input
            type = "text"
            onChange={(e) => setname(e.target.value)}
            value={username}
        />
    <label><h1>Add your review:</h1> </label>
        <input
            type = "text"
            onChange={(e) => setReview(e.target.value)}
            value={review}
        />
      
         <button>Add review</button>
         <div>{show &&<p> <h3>your review was added successfully</h3></p>}</div>
         <div>{reject &&<p> <h3>Already added review before</h3></p>}</div>
         <p></p>
         <p></p>
          
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
export default Revcourse

