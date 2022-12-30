import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext"

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
    <div>
                  <button className="back" onClick={() => navigate(-1)}> ❮ Back </button>

      {show &&<p> Request Accepted  successfully</p>}
      <br></br> 
      {rejected &&<p> Error: Request could not be accepted  </p>}
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


   
 
    
   <button onClick={()=>navigate('/admin')}>Back</button>

  </div>
  )
}
export default AcceptRequests
  