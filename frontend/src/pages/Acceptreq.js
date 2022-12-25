import { useState } from "react";

import { useAuthContext } from "../hooks/useAuthContext"

const AcceptRequests=()=>{
  const {user} = useAuthContext()
  const paramss = new URLSearchParams(window.location.search);
    const userId = paramss.get('userId');
  const courseId=paramss.get('courseId');
  
  
  const[error , setError] = useState(null);
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
    console.log(json)
}
if(response.ok) {
    setError(null);
    console.log(json)

}


  }
  return(
    <form onClick={handleSubmit()}> 

   
 
    
    <button >accept</button>

  </form>
  )
}
export default AcceptRequests
  