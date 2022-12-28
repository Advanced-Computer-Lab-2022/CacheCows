import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext"
import { useState } from "react";



const InstructorAcceptTerms=()=>{
//     const navigate=useNavigate();

//     const {user} = useAuthContext()

//     const [acceptTerms,setTerms]=useState('');
//     const[inst_id,setID]=useState('');
//     const[error , setError] = useState(null);
    

//     const handleSubmit = async(e) => {
//         e.preventDefault()

//         setID(JSON.stringify(user._id))

//         const inst = {
//             inst_id,
//             acceptTerms
//         }


//         const response = await fetch('/api/instructors/InstructorAcceptTerms', {
//             method: 'POST',
//             strong: JSON.stringify(inst),
//             headers: {
//                 'Content-Type' : 'application/json',
//                 'Authorization': `Bearer ${user.token}`
//             }
//         })
//         const json = await response.json()
// if(!response.ok) {
//     console.log('a7',inst_id)
//     setError(json.error)
// }
// if(response.ok) {
//   setTerms('');
//     setError(null);
//     console.log(json)

// }
// navigate("/Instructor")
// }


return(

    <form className="backgroundimage" >
        <br></br>
        <h2>Our Payment and Refund Policy</h2>
        <br></br>
        <br></br>
        <br></br>
      <div> 
    <strong>Except as provided by law, all purchases are final and non-refundable. Taxes are non-refundable. If you believe that RUBIX has charged you in error, you must contact RUBIX within 30 days of such charge. No refunds will be given for any transaction which is more than 30 days old. When you purchase any digital content or services from RUBIX, any right you may have to withdraw from or cancel the purchase will be terminated once the digital content is delivered to you upon your request, and you will not be entitled to claim any refund, except where you believe RUBIX has charged you in error. If you use third party services to purchase any of our Services, such purchase is subject to the refund terms of the applicable third party (including with respect to payment terms, refunds, etc.).
    </strong>
    </div> 
    <br></br>
    <div> 
    <strong> 
    As a trainee, you can only request a refund only if less than 50% of the course has been attended
</strong>

</div>
<br></br>
<div> 
    <strong> 
       RUBIX reserves the right to refuse a refund request if it reasonably believes or suspects (i) that you are trying to unfairly exploit this refund policy, for example, by making repetitive refund requests in respect of the same product or feature, or by trying to receive a refund for a non-refundable credit (such as a reward); (ii) that you are in breach of the terms of  Policy, RUBIX Terms of Service, the MessageWhiz General Terms & Conditions or the Privacy Policy; (iii) that you are using any of our products fraudulently or that your user account is being used by a third party fraudulently; or (iv) that you purchased your credit through a third party service and the terms of such third party do not allow such refund. This refund policy does not affect any of your statutory rights to pursue a claim.
 </strong>
</div> 
    <br></br>
<div> 
    <strong> 
For all refunds due to an error in your payment amount please email Rubix1@gmail.com.com quoting your company address, full name, contact number, and reason for requesting a refund. The accounts department will deal with your query at the earliest possible opportunity and may ask for some additional details to process your refund.
</strong>
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

        </form>
)
}
export default InstructorAcceptTerms
    




    


        