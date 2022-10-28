import { useState } from "react";
import { json } from "react-router-dom";

const AdminAddCrpTraineeForm = () => {
    const [Name, setName] = useState('')
    const [corp_user, setUserName] = useState('')
    const [corp_pass, setPassword] = useState('')
    const [corp_email, setEmail] = useState('')
    const [country, setCountry] = useState('')
    const [corp_bd, setBd] = useState('')
  
    const[error , setError] = useState(null)

    
    const handleSubmit = async(e) => {
        e.preventDefault()

        const inst = {
            Name, 
            corp_user,
            corp_pass, 
            corp_email, 
            country, 
            corp_bd
        }

        const response = await fetch('/api/corpTrainee', {
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
      
        setName('')
        setUserName('')
        setPassword('')
        setEmail('')
        setCountry('')
        setBd('')
        
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
            value={corp_user}
        />

        <label>Username: </label>
        <input
            type = "text"
            onChange={(e) => setUserName(e.target.value)}
            value={corp_user}
        />


        <label>Password: </label>
        <input
            type = "text"
            onChange={(e) => setPassword(e.target.value)}
            value={corp_pass}
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
            value={corp_bd}
        />


   
        <button>Add Corporate Trainee!</button>
        {error && <div className="error">{error}</div>}
       </form>
    )
}   

export default AdminAddCrpTraineeForm