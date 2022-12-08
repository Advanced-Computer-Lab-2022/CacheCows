import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext"


const InstEditEmail=()=>{
    const {user} = useAuthContext()

    const[instructor_email,setEmail]=useState('');
   // const[inst_id,setID]=useState('');
    const[error , setError] = useState(null);
    const paramss = new URLSearchParams(window.location.search);

    const userId = paramss.get('userId');

    

    const handleSubmit = async(e) => {
        e.preventDefault()

     //   setID(JSON.stringify(user._id))

        const inst = {
            instructor_email
        }


        const response = await fetch(`/api/instructors/InstructorEditEmail?userId=${userId}`, {
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
    setEmail('');
    setError('Email Changed Successfully!');
    console.log(json)

}

}


return(

    <form className="filter" onSubmit={handleSubmit}>
    <label>New Email: </label>
        <input
            type = "text"
            onChange={(e) => setEmail(e.target.value)}
            value={instructor_email}
        />
         <button>Change my Email</button>
        {error && <div className="error">{error}</div>}
        </form>
)
}
export default InstEditEmail
    
