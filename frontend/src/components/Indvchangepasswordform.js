import { useState } from "react";
import { useAuthContext } from '../hooks/useAuthContext'
import axios from 'axios';
const ChangePassword=()=>{
    const { user } = useAuthContext()
    const[indv_pass,setIndvpass]=useState('');
    const[error , setError] = useState(null);
    

    const handleSubmit = async(e) => {
        e.preventDefault()
        if (!user) {
            setError('You must be logged in')
            return
          }
          const response=await axios.post('/api/indvtrainee/forgetpassword')
          
        const json = await response.json()
if(!response) {
    setError(json.error)
    console.log("password")
    
}
if(response.ok) {
    setIndvpass('');
    setError(null);
    console.log("updated")
}

}


return(

    <form className="create" onSubmit={handleSubmit}>
      

    <label>New Password: </label>
        <input
            type = "text"
            onChange={(e) => setIndvpass(e.target.value)}
            value={indv_pass}
        />
         <button>Confirm new password</button>
        {error && <div className="error">{error}</div>}
        </form>
)
}
export default ChangePassword