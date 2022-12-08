import { useState } from "react";

const ForgotpasswordForm=()=>{
const [instructor_email,setemail]=useState('');
const[error , setError] = useState(null);
const handleSubmit = async(e) => {
    e.preventDefault()

    const inst={instructor_email}


const response = await fetch('/api/instructors/forgetpassword', {
    method: 'POST',
    body: JSON.stringify(inst),
    headers: {
        'Content-Type' : 'application/json'
    }
})
const json = await response.json()
if(!response) {
    setError(json.error)
}
if(response.ok) {
    setemail('');
    setError(null);
    console.log('mail sent', json)

}
}


return(

    <form className="filter" onSubmit={handleSubmit}>
    <label>Email Address: </label>
        <input
            type = "text"
            onChange={(e) => setemail(e.target.value)}
            value={instructor_email}
        />
         <button>Send Email</button>
        {error && <div className="error">{error}</div>}
        </form>
)
}
export default ForgotpasswordForm