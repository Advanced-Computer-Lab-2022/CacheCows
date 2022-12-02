import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext"

const Instchangepasssword=()=>{
    const {user} = useAuthContext()
    
    const [instructor_pass,setPass]=useState('')
    const[error , setError] = useState(null);


    const handleSubmit = async(e) => {
        e.preventDefault()
       

        const inst={instructor_pass}

        const response=await fetch('/api/instructors/changepassword',{
            method: 'PUT',
            body:JSON.stringify(inst),
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': `Bearer ${user.token}`
                
            }
        })

        const json = await response.json()
        if(!response.ok) {
            console.log('a7',instructor_pass)
            setError(json.error)
        }
        if(response.ok) {
            setPass('');
            setError(null);
            console.log(json)
        
        }
    }
return(
    <form className="create" onSubmit={handleSubmit}>
    <label>New Password: </label>
        <input
            type = "password"
            onChange={(e) => setPass(e.target.value)}
            value={instructor_pass}
        />
         <button>Change Password</button>
        {error && <div className="error">{error}</div>}
        </form>
)
}
export default Instchangepasssword