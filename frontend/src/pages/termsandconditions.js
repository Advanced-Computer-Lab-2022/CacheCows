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

    <form className="create" onSubmit={handleSubmit}>
    <label>By Clicking on the Agree Button, you give us all the rights to the posted videos and materials
      as well as the 10% taken by RUBIX on each video per registered trainee. </label>
      <br>
      
      </br>  
         <button>Accept</button>
        {error && <div className="error">{error}</div>}
        </form>
)
}
export default InstructorAcceptTerms
    




    


        