import { useState } from "react";

const ChangePassword=()=>{
    const[pass,setPass]=useState('');
    const[error , setError] = useState(null);
    

    const handleSubmit = async(e) => {
        e.preventDefault()

        const response = await fetch('/api/instructors/changepassword', {
            method: 'POST',
            body: JSON.stringify(pass),
            headers: {
                'Content-Type' : 'application/json'
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
    
