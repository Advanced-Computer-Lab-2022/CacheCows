import { useState } from "react";
import { json } from "react-router-dom";

const adminForm = () => {
    const [admin_id, setID] = useState('')
    const [admin_name, setName] = useState('')
    const [admin_user, setUserName] = useState('')
    const [admin_pass, setPassword] = useState('')
    const [admin_email, setEmail] = useState('')
    const [country, setCountry] = useState('')
    const [admin_bd, setBd] = useState('')
  
    const[error , setError] = useState(null)

    const handleSubmit = async(e) => {
        e.preventDefault()

        const admin = {
            admin_id,
            admin_name,
            admin_user,
            admin_pass,
            admin_email,
            country,
            admin_bd
        }

        const response = await fetch('/api/admins', {
            method: 'POST',
            body: JSON.stringify(admin),
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
            
        console.log('New Admin Added', json)
        }
    }

    return (
       <form className="create" onSubmit={handleSubmit}>
        <h3>Add a New admin!</h3>

        <label>Admin ID: </label>
        <input
            type = "text"
            onChange={(e) => setID(e.target.value)}
            value={admin_id}
        />

        <label>Admin Name: </label>
        <input
            type = "text"
            onChange={(e) => setName(e.target.value)}
            value={admin_name}
        />

        <label>Username: </label>
        <input
            type = "text"
            onChange={(e) => setUserName(e.target.value)}
            value={admin_user}
        />


        <label>Password: </label>
        <input
            type = "text"
            onChange={(e) => setPassword(e.target.value)}
            value={admin_pass}
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
            value={admin_bd}
        />


   
        <button>Add Admin!</button>
        {error && <div className="error">{error}</div>}
       </form>
    )
}   

export default adminForm