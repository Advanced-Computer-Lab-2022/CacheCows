import { useState } from "react";
import { useAuthContext } from '../hooks/useAuthContext'


const AdminForm = () => {
    const { user } = useAuthContext()

    const [admin_name, setName] = useState('')
    const [admin_user, setUserName] = useState('')
    const [admin_pass, setPassword] = useState('')
    const [admin_email, setEmail] = useState('')
    const [country, setCountry] = useState('')
    const [admin_bd, setBd] = useState('')
    const[shown,setShown]=useState(false)  
    const[error , setError] = useState(null)

    const handleSubmit = async(e) => {
        e.preventDefault()
        if (!user) {
            setError('You must be logged in')
            return
          }

        const admin = {
            admin_name,
            admin_user,
            admin_pass,
            admin_email,
            country,
            admin_bd
        }

        const response = await fetch('/api/admins/RegisterAdmin', {
            method: 'POST',
            body: JSON.stringify(admin),
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
        setShown(true)
        setError(null)
            
        console.log('New Admin Added', json)
        }
    }

    return (
       <form className="create" onSubmit={handleSubmit}>
        <h3>Add a New admin!</h3>

        

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
            type = "password"
            onChange={(e) => setPassword(e.target.value)}
            value={admin_pass}
        />

        <label>Email: </label>
        <input
            type = "text"
            onChange={(e) => setEmail(e.target.value)}
            value={admin_email}
        />
        
        <label>Country: </label>
        <input
            type = "text"
            onChange={(e) => setCountry(e.target.value)}
            value={country}
        />


        <label>Birthday: </label>
        <input
            type = "date"
            onChange={(e) => setBd(e.target.value)}
            value={admin_bd}
        />


   
        <button>Add Admin!</button>
        {error && <div className="error">{error}</div>}
        <div>{shown &&<p> <h1>Instructor was added successfully </h1> </p>}</div>
       </form>
    )
}   

export default AdminForm