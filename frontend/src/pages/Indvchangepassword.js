import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext"


const Indvchangepasssword=()=>{
    const {user} = useAuthContext()
    const[shown,setShown]=useState(false)
    
    const [indv_pass,setPass]=useState('')
    const[error , setError] = useState(null);
    const paramss = new URLSearchParams(window.location.search);
    const userId = paramss.get('userId');
   

    const handleSubmit = async(e) => {
        e.preventDefault()
       

        const indv={indv_pass}

        const response=await fetch(`/api/indvtrainee/changepassword?userId=${userId}`,{
            method: 'PUT',
            body:JSON.stringify(indv),
            headers: {
                'Content-Type' : 'application/json'
                
                
            }
        })

        const json = await response.json()
        if(!response.ok) {
            console.log('a7',indv_pass)
            setError(json.error)
        }
        if(response.ok) {
            setPass('');
            setError(null);
            setShown(true)
            console.log(json)
        
        }
    }






return(
   <form className="filter" onSubmit={handleSubmit}>
    <label>New Password: </label>
        <input
            type = "password"
            onChange={(e) => setPass(e.target.value)}
            value={indv_pass}
        />
         <button>Change Password</button>
         <div>{shown &&<p> your password was changed successfully </p>}</div>
        {error && <div className="error">{error}</div>}
        </form>
)
}
export default Indvchangepasssword