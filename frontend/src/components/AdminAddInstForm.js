import { useState } from "react";
import { json } from "react-router-dom";

const AdminAddInstForm = () => {
    const [instructor_id, setID] = useState('')
    const [instructor_name, setName] = useState('')
    const [instructor_user, setUserName] = useState('')
    const [instructor_pass, setPassword] = useState('')
    const [instructor_email, setEmail] = useState('')
    const [country, setCountry] = useState('')
    const [instructor_bd, setBd] = useState('')
  
    const[error , setError] = useState(null)

   
    const handleSubmit = async(e) => {
        e.preventDefault()

        const inst = {
            instructor_id,
            instructor_name,
            instructor_user,
            instructor_pass,
            instructor_email,
            country,
            instructor_bd
        }

        const response = await fetch('/api/instructors', {
            method: 'POST',
            body: JSON.stringify(inst),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
        }
        if(response.ok) {
        setID('')
        setName('')
        setUserName('')
        setPassword('')
        setEmail('')
        setCountry('')
        setBd('')
        
        setError(null)
            
        console.log('New Instructor Added', json)
        }
    }

    return (
       <form className="create" onSubmit={handleSubmit}>
        <h3>Add a New instructor!</h3>

        <label> Instructor ID: </label>
        <input
            type = "text"
            onChange={(e) => setID(e.target.value)}
            value={instructor_id}
        />

        <label>instructor Name: </label>
        <input
            type = "text"
            onChange={(e) => setName(e.target.value)}
            value={instructor_name}
        />

        <label>Username: </label>
        <input
            type = "text"
            onChange={(e) => setUserName(e.target.value)}
            value={instructor_user}
        />


        <label>Password: </label>
        <input
            type = "text"
            onChange={(e) => setPassword(e.target.value)}
            value={instructor_pass}
        />
        
        <label>Country: </label>
        <input
            type = "text"
            onChange={(e) => setCountry(e.target.value)}
            value={country}
        />


        <label>Birthday: </label>
        <input
            type = "text"
            onChange={(e) => setBd(e.target.value)}
            value={instructor_bd}
        />


   
        <button>Add Instructor!</button>
        {error && <div className="error">{error}</div>}
       </form>
    )
}   

export default AdminAddInstForm