import { useState } from "react";

const ForgotpasswordForm=()=>{
const [indv_email,setemail]=useState('');
const[error , setError] = useState(null);
const [show,setShow]=useState(false)
const [reject,setReject]=useState(false)
const handleSubmit = async(e) => {
    e.preventDefault()

    const indv={indv_email}


const response = await fetch('/api/indvtrainee/forgetpassword', {
    method: 'POST',
    body: JSON.stringify(indv),
    headers: {
        'Content-Type' : 'application/json'
    }
})
const json = await response.json()
if(!response.ok) {
    setError(json.error)
    console.log('mail not sent', json)
    setReject(true)
    setemail('');
}
if(response.ok) {
    setemail('');
    setError(null);
    setShow(true)
    console.log('mail sent', json)
}

}


return(

    <form  onSubmit={handleSubmit}>
    <label>Email Address: </label>
        <input
            type = "text"
            onChange={(e) => setemail(e.target.value)}
            value={indv_email}
        />
         <button>Send Email</button>
        {error && <div className="error">{error}</div>}
        <div>{show &&<p> <h1>An email was sent to your mail</h1> </p>}</div>
        <div>{reject &&<p> <h1>Incorrect mail</h1> </p>}</div>
        </form>
)
}
export default ForgotpasswordForm