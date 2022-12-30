import { useState } from "react";
import Popup from 'reactjs-popup';

import { useAuthContext } from "../hooks/useAuthContext"
const ViewRequests=({request})=>{
 
    return(
      <div className="inst-details"  >



      <p><strong>Traniee Name: </strong>{request.trainee_name}</p>
      <p><strong>course Title: </strong>{request.course_name}</p>
              <p><strong>Appeal: </strong>{request.appeal}</p>
              <p><strong>flag: </strong>{request.flag}</p>
              
              <button onClick={()=>window.location.href=`/AcceptRequests?userId=${request.trainee_id}&courseId=${request.course_id}`}> grant access</button>
            </div>


            

      
    
     
      
      
    )

    
}

export default ViewRequests
