import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext"
import rubixgif from '../assets/Rubix.gif';
import Box from '@mui/material/Box';
const AcceptRequests=()=>{
  const {user} = useAuthContext()
  const navigate=useNavigate();
  const paramss = new URLSearchParams(window.location.search);
    const userId = paramss.get('userId');
  const courseId=paramss.get('courseId');
  
  
  const[error , setError] = useState(null);
  const[show,setShow]=useState(false);
  const{rejected,setRejected}=useState(false);
  const handleSubmit = async() => {
    
    console.log(courseId)
   
    const response=await fetch(`/api/admins/acceptrequest?userId=${userId}&courseId=${courseId}`,{
      method: 'PUT',
      headers: {
          'Content-Type' : 'application/json',
          'Authorization': `Bearer ${user.token}`
          
          
      }
  }) 

  const json = await response.json()
  if(!response.ok) {
    setError(json.error)
    setRejected(true);
    console.log(json)
}
if(response.ok) {
    setError(null);
    setShow(true)
    console.log(json)

}


  }
  handleSubmit()
  
  return(
    <div className="pagesplain">
                  <button className="back" onClick={() => navigate(-1)}> ❮ Back </button>

      {show &&<p><h1> Request Accepted  successfully </h1></p>}
      <br></br> 
      {rejected &&<p><h1> Error: Request could not be accepted </h1> </p>}
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
export default AcceptRequests
  