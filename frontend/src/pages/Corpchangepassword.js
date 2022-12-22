import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext"
const Cropchangepasssword=()=>{
    const {user} = useAuthContext()
    const[shown,setShown]=useState(false)
    const [corp_pass,setPass]=useState('')
    const[error , setError] = useState(null);
    const paramss = new URLSearchParams(window.location.search);
    const userId = paramss.get('userId');

    const handleSubmit = async(e) => {
        e.preventDefault()
       

        const corp={corp_pass}

        const response=await fetch(`/api/corpTrainee/changepassword?userId=${userId}`,{
            method: 'PUT',
            body:JSON.stringify(corp),
            headers: {
                'Content-Type' : 'application/json'
                
                
            }
        })

        const json = await response.json()
        if(!response.ok) {
            console.log(corp_pass)
            setError(json.error)
        }
        if(response.ok) {
            setPass('');
            setShown(true)
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
         <div>{shown &&<p> your password was changed successfully </p>}</div>
        {error && <div className="error">{error}</div>}
        </form>
)
}
export default Cropchangepasssword