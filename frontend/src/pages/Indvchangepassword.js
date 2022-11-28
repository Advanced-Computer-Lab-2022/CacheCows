import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext"

const Indvchangepasssword=()=>{
    const {user} = useAuthContext()
    
    const [indv_pass,setPass]=useState('')
    const[error , setError] = useState(null);
  
   

    const handleSubmit = async(e) => {
        e.preventDefault()
       

        const indv={indv_pass}

        const response=await fetch('/api/indvtrainee/changepassword',{
            method: 'PUT',
            body:JSON.stringify(indv),
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': `Bearer ${user.token}`
                
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
            console.log(json)
        
        }
    }






return(
   <form className="create" onSubmit={handleSubmit}>
    <label>New Password: </label>
        <input
            type = "text"
            onChange={(e) => setPass(e.target.value)}
            value={indv_pass}
        />
         <button>Change Password</button>
        {error && <div className="error">{error}</div>}
        </form>
)
}
export default Indvchangepasssword