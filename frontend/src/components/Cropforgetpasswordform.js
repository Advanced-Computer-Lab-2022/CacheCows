import { useState } from "react";

const ForgotpasswordForm=()=>{
const [corp_email,setemail]=useState('');
const[error , setError] = useState(null);
const handleSubmit = async(e) => {
    e.preventDefault()

    const corp={corp_email}


const response = await fetch('/api/corpTrainee/forgetpassword', {
    method: 'POST',
    body: JSON.stringify(corp),
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

    <form className="create" onSubmit={handleSubmit}>
    <label>Email Address: </label>
        <input
            type = "text"
            onChange={(e) => setemail(e.target.value)}
            value={corp_email}
        />
         <button>Send Email</button>
        {error && <div className="error">{error}</div>}
        </form>
)
}
export default ForgotpasswordForm