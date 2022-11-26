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
          const indv={pass}
        const response = await fetch('/api/indvtrainee/changepassword', {
            method: 'POST',
            body: JSON.stringify(indv),
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
    console.log("updated")
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