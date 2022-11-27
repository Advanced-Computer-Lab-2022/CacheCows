import { useState } from "react";
import { useAuthContext } from '../hooks/useAuthContext'
const ChangePassword=()=>{
    const { user } = useAuthContext()
    const[pass,setPass]=useState('');
    const[error , setError] = useState(null);
    

    const handleSubmit = async(e) => {
        e.preventDefault()
        if (!user) {
            setError('You must be logged in')
            return
          }
        
        const response = await fetch('/api/instructors/changepassword', {
            method: 'PUT',
            body: JSON.stringify(pass),
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
    setPass('');
    setError(null);
}

}


return(

    <form className="create" onSubmit={handleSubmit}>
    <label>New Password: </label>
        <input
            type = "text"
            onChange={(e) => setPass(e.target.value)}
            value={pass}
        />
         <button>Confirm new password</button>
        {error && <div className="error">{error}</div>}
        </form>
)
}
export default ChangePassword
    
