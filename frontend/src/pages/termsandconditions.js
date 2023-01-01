import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext"
import { useState } from "react";





// function Accept() {
//   const navigate=useNavigate();
//   const {user} = useAuthContext()
//   const [acceptTerms,setTerms]=useState('');

//         const inst= {acceptTerms}


//         const handleSubmit = async(e) => {
//             e.preventDefault()

//             const response=await fetch('/api/instructors/InstructorAcceptTerms',{
//                 method: 'POST',
//                 body:JSON.stringify(inst),
//                 headers: {
//                     'Content-Type' : 'application/json',
//                     'Authorization': `Bearer ${user.token}`
                    
//                 }
               
//             })
//             const json = await response.json()

//             if(!response.ok) {
              
//               console.log('cannot accept terms', json)
//           }
//           if(response.ok) {
//               setTerms('');
//               console.log('Terms Set', json)
//           }

            
//         }

//   return (
//     <form className="create" onSubmit={handleSubmit} >

//      <strong>
//     By Clicking on the Agree Button, you give us all the rights to the posted videos and materials
//      as well as the 10% taken by RUBIX on each video per registered trainee.
//      <div>
      // <button
      //   // onClick={() => {
      //   //   navigate("/Instructor");
      //   // }}
      // >
      //   {" "}
      //   Accept
      // </button>
//       </div>
//       <br />

// </strong>
// </form>

// )

// }

// export default Accept;





const InstructorAcceptTerms=()=>{
    const navigate=useNavigate();

    const {user} = useAuthContext()

    const [acceptTerms,setTerms]=useState('');
    const[inst_id,setID]=useState('');
    const[error , setError] = useState(null);
    

    const handleSubmit = async(e) => {
        e.preventDefault()

        setID(JSON.stringify(user._id))

        const inst = {
            inst_id,
            acceptTerms
        }


        const response = await fetch('/api/instructors/InstructorAcceptTerms', {
            method: 'POST',
            body: JSON.stringify(inst),
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()
if(!response.ok) {
    console.log('a7',inst_id)
    setError(json.error)
}
if(response.ok) {
  setTerms('');
    setError(null);
    console.log(json)

}
navigate("/Instructor")
}


return(
<div className="pagesplain2">
    <form className="create" onSubmit={handleSubmit}>
    <br></br>
    <br></br>
    <br></br>
    <h6>Our Payment and Refund Policy</h6>
    <br></br>

    <h3>By Clicking on the Agree Button, you give us all the rights to the posted videos and materials
      as well as the 10% taken by RUBIX on each video per registered trainee. </h3>
      <br>
      
      </br> 

      
      <div> 
    <label>Except as provided by law, all purchases are final and non-refundable. Taxes are non-refundable. If you believe that RUBIX has charged you in error, you must contact RUBIX within 30 days of such charge. No refunds will be given for any transaction which is more than 30 days old. When you purchase any digital content or services from RUBIX, any right you may have to withdraw from or cancel the purchase will be terminated once the digital content is delivered to you upon your request, and you will not be entitled to claim any refund, except where you believe RUBIX has charged you in error. If you use third party services to purchase any of our Services, such purchase is subject to the refund terms of the applicable third party (including with respect to payment terms, refunds, etc.).
    </label>
    </div> 
    <br></br>

      <div> 
    <label>
    RUBIX reserves the right to refuse a refund request if it reasonably believes or suspects (i) that you are trying to unfairly exploit this refund policy, for example, by making repetitive refund requests in respect of the same product or feature, or by trying to receive a refund for a non-refundable credit (such as a reward); (ii) that you are in breach of the terms of Policy, RUBIX Terms of Service, the MessageWhiz General Terms & Conditions or the Privacy Policy; (iii) that you are using any of our products fraudulently or that your user account is being used by a third party fraudulently; or (iv) that you purchased your credit through a third party service and the terms of such third party do not allow such refund. This refund policy does not affect any of your statutory rights to pursue a claim. 
       </label></div> 
    <br></br>

    <div> 
    <label>
    For all refunds due to an error in your payment amount please email Rubix1@gmail.com.com quoting your company address, full name, contact number, and reason for requesting a refund. The accounts department will deal with your query at the earliest possible opportunity and may ask for some additional details to process your refund.
    </label>
        </div> 
    <br></br>

    <br/>
    <br/>
    <br/>

         <button>Accept</button>
        {error && <div className="error">{error}</div>}
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        </form>
        </div>
)
}
export default InstructorAcceptTerms
    




    


        