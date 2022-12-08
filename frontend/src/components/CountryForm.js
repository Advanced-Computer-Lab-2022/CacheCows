import { useState } from "react";
import { useAuthContext } from '../hooks/useAuthContext'


const Countryform=()=>{
    const paramss = new URLSearchParams(window.location.search);
    const instid = paramss.get('userId');

    const { user } = useAuthContext()

    const[instructor_id,setID]=useState('');
    const[country,setCountry]=useState('');
    const[error , setError] = useState(null)
const handleSubmit = async(e) => {
    e.preventDefault()
    if (!user) {
        setError('You must be logged in')
        return
      }


    const Instructor= {
        _id : instid,
        country : country
    }

    const response = await fetch('/api/instructors/updateInstructor', {
        method: 'PUT',
        body: JSON.stringify(Instructor),
        headers: {
            'Content-Type' : 'application/json',
            'Authorization': `Bearer ${user.token}`
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
        console.log(json)
    }
}

return(
    <form className="filter" onSubmit={handleSubmit}>
    <h3>choose country!</h3>

     <label>Country: </label>
        <input
            type = "text"
            onChange={(e) => setCountry(e.target.value)}
            value={country}
            placeholder='Country...'
            className='input'
        />


    <button>Update Country</button>
        {error && <div className="error">{error}</div>}
    </form>

)
}
export default Countryform