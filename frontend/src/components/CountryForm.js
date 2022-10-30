import { set } from "mongoose";
import { useState } from "react";
import { json } from "react-router-dom";

const Countryform=()=>{
    const[instructor_id,setID]=useState('');
    const[country,setCountry]=useState('');
    const[error , setError] = useState(null)
const handleSubmit = async(e) => {
    e.preventDefault()


    const Instructor=(instructor_id,country)

    const response = await fetch('/api/instructors/updateInstructor/:id', {
        method: 'PUT',
        body: JSON.stringify(Instructor),
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    const json = await response.json()

    if(!response) {
        setError(json.error)
    }
    if(response.ok){
        setID('')
        setCountry('')
        setError(null)
    }
}

return(
    <form className="update" onSubmit={handleSubmit}>
    <h3>choose country!</h3>
    <label>Instructor ID: </label>
    <input
            type = "text"
            onChange={(e) => setID(e.target.value)}
            value={instructor_id}
        />

<label>Country: </label>
        <input
            type = "text"
            onChange={(e) => setCountry(e.target.value)}
            value={country}
        />


<button>Update Country</button>
        {error && <div className="error">{error}</div>}
    </form>

)
}
export default Countryform