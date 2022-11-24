import { useState } from "react";
import { useAuthContext } from '../hooks/useAuthContext'


const AdminAddInstForm = () => {
    const { user } = useAuthContext()

    const [instructor_name, setName] = useState('')
    const [instructor_user, setUserName] = useState('')
    const [instructor_pass, setPassword] = useState('')
    const [instructor_email, setEmail] = useState('')
    const [country, setCountry] = useState('')
    const [instructor_bd, setBd] = useState('')
  
    const[error , setError] = useState(null)

   
    const handleSubmit = async(e) => {
        e.preventDefault()
        if (!user) {
            setError('You must be logged in')
            return
          }
        const inst = {
            instructor_name,
            instructor_user,
            instructor_pass,
            instructor_email,
            country,
            instructor_bd
        }

        

        const response = await fetch('/api/admins/registerInstructor', {
            method: 'POST',
            body: JSON.stringify(inst),
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
        }
        if(response.ok) {
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
            type = "password"
            onChange={(e) => setPassword(e.target.value)}
            value={instructor_pass}
        />
        
        <label>Email: </label>
        <input
            type = "text"
            onChange={(e) => setEmail(e.target.value)}
            value={instructor_email}
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