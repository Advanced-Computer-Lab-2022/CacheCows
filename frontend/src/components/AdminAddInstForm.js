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
    const [instructor_biography, setBio] = useState('')
    const [acceptTerms, setAT] = useState('')
    const[shown,setShown]=useState(false)  
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
            instructor_bd,
            instructor_biography,
            acceptTerms 
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
        setBio('')
        setBd('')
        setAT('')
        setShown(true)
        
        setError(null)
        //localStorage.setItem('acceptTerms' = false)
        if (acceptTerms === 'false'){
        localStorage.setItem('acceptTerms', 'false')
        }
        else{
            localStorage.setItem('acceptTerms', 'true')
        }


            
        console.log('New Instructor Added', json)
        }
    }

    return (
       <form className="create" onSubmit={handleSubmit}>
        
<h3> Add Instructor</h3>
<br></br>

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
            type = "date"
            onChange={(e) => setBd(e.target.value)}
            value={instructor_bd}
        />

        <label>Biography: </label>
        <input
            type = "text"
            onChange={(e) => setBio(e.target.value)}
            value={instructor_biography}
        />


   
        <button>Add Instructor!</button>
        {error && <div className="error">{error}</div>}
        <div>{shown &&<p> <h1>Instructor was added successfully </h1> </p>}</div>
       </form>
    )
}   

export default AdminAddInstForm