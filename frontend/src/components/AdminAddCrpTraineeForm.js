import { useState } from "react";
import { useAuthContext } from '../hooks/useAuthContext'
import axios from 'axios';




const AdminAddCrpTraineeForm = () => {

    const { user } = useAuthContext()

    const [corp_name, setName] = useState('')
    const [corp_user, setUserName] = useState('')
    const [corp_pass, setPassword] = useState('')
    const [corp_email, setEmail] = useState('')
    const [Country, setCountry] = useState('')
    const [corp_bd, setBd] = useState('')
    const[shown,setShown]=useState(false)  
    const [rej,setRej]=useState(false)
    const[error , setError] = useState(null)

    
    const handleSubmit = async(e) => {
        e.preventDefault()

        if (!user) {
            setError('You must be logged in')
            return
          }

        const crp = {
            corp_name, 
            corp_user,
            corp_pass, 
            corp_email,
            corp_bd, 
            Country, 
            
        }
      


        const response = await fetch('/api/admins/registerCorpTrainee', {
            method: 'POST',
            body: JSON.stringify(crp),
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
            setRej(true)
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
            
        console.log('New Corporate Trainee Added', json)
        }
    }

    return (
       <form className="create" onSubmit={handleSubmit}>
        <h3>Add a New Corporate Trainee!</h3>

    
        

        <label>Corporate Trainee Name: </label>
        <input
            type = "text"
            onChange={(e) => setName(e.target.value)}
            value={corp_name}
        />

        <label>Username: </label>
        <input
            type = "text"
            onChange={(e) => setUserName(e.target.value)}
            value={corp_user}
        />


        <label>Password: </label>
        <input
            type = "password"
            onChange={(e) => setPassword(e.target.value)}
            value={corp_pass}
        />

        <label>Email: </label>
        <input
            type = "text"
            onChange={(e) => setEmail(e.target.value)}
            value={corp_email}
        />
        
        <label>Country: </label>
        <input
            type = "text"
            onChange={(e) => setCountry(e.target.value)}
            value={Country}
        />


        <label>Birthday: </label>
        <input
            type = "date"
            onChange={(e) => setBd(e.target.value)}
            value={corp_bd}
        />


   
        <button>Add Corporate Trainee!</button>
        {error && <div className="error">{error}</div>}
        <div>{shown &&<p> <h1>Corprate trainee was added successfully </h1> </p>}</div>
        
       </form>
    )
}   

export default AdminAddCrpTraineeForm;