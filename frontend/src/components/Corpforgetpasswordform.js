import { useState } from "react";

const ForgotpasswordForm=()=>{
const [corp_email,setemail]=useState('');
const [show,setShow]=useState(false)
const [reject,setReject]=useState(false)
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
if(!response.ok) {
    setError(json.error)
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
            value={corp_email}
        />
         <button>Send Email</button>
        
        <div>{show &&<p> <h1>An email was sent to your mail</h1> </p>}</div>
        <div>{reject &&<p> <h1>Incorrect mail</h1> </p>}</div>
        </form>
)
}
export default ForgotpasswordForm