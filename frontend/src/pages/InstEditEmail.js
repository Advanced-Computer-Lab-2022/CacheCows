import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext"


const InstEditEmail=()=>{
    const {user} = useAuthContext()

    const[instructor_email,setEmail]=useState('');
    const[error , setError] = useState(null);
    

    const handleSubmit = async(e) => {
        e.preventDefault()

        const response = await fetch('/api/instructors/InstructorEditEmail', {
            method: 'POST',
            body: JSON.stringify(instructor_email),
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()
if(!response) {
    setError(json.error)
}
if(response.ok) {
    setEmail('');
    setError(null);
    console.log( json)

}

}


return(

    <form className="create" onSubmit={handleSubmit}>
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
    
