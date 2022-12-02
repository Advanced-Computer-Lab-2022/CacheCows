import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext"
const Cropchangepasssword=()=>{
    const {user} = useAuthContext()
    
    const [corp_pass,setPass]=useState('')
    const[error , setError] = useState(null);


    const handleSubmit = async(e) => {
        e.preventDefault()
       

        const corp={corp_pass}

        const response=await fetch('/api/corpTrainee/changepassword',{
            method: 'PUT',
            body:JSON.stringify(corp),
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': `Bearer ${user.token}`
                
            }
        })

        const json = await response.json()
        if(!response.ok) {
            console.log(corp_pass)
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
            value={corp_pass}
        />
         <button>Change Password</button>
        {error && <div className="error">{error}</div>}
        </form>
)
}
export default Cropchangepasssword