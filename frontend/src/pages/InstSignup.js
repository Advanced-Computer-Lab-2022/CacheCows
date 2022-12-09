
import { useState } from "react"
import { useSignup } from "../hooks/InstSignup"
import { Link } from 'react-router-dom'
//import Checkbox from "../components/Checkbox";
import Checkbox from '@mui/material/Checkbox';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';


const Signup = () => {
  const [instructor_email, setEmail] = useState('')
  const [instructor_pass, setPassword] = useState('')
  const [instructor_name, setName] = useState('')
  const [instructor_user, setUser] = useState('')
  const [country, setCountry] = useState('')
  const [instructor_bd, setBirthday] = useState('')
  const [accept, setAccept] = useState('')

  const {signup, error, isLoading} = useSignup()

  const [agree, setAgree] = useState(false);

  const checkboxHandler = () => {
    // if agree === true, it will be set to false
    // if agree === false, it will be set to true
    setAgree(!agree);
   
  }



  const handleSubmit = async (e) => {
    e.preventDefault()

   
    await signup(instructor_email, instructor_pass, instructor_name, instructor_user, country, instructor_bd)
     
  }

  return (
   
    
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up As Instructor</h3>
      
      <label>Email address:</label>
      <input 
        type="instructor_email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={instructor_email} 
      />
      <label>Password:</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={instructor_pass} 
      />
      <label>Name:</label>
      <input 
        type="instructor_name" 
        onChange={(e) => setName(e.target.value)} 
        value={instructor_name} 
      />
      <label>Username:</label>
      <input 
        type="instructor_user" 
        onChange={(e) => setUser(e.target.value)} 
        value={instructor_user} 
      />
      <label>Country : </label>
      <input 
        type="country" 
        onChange={(e) => setCountry(e.target.value)} 
        value={country} 
      />
      <label>Birthday:</label>
      <input 
        type="instructor_bd" 
        onChange={(e) => setBirthday(e.target.value)} 
        value={instructor_bd} 
      />

    
      

        <div>
          <input type="checkbox" id="agree" onChange={checkboxHandler} />
          <label htmlFor="agree"> Accept Our <Link to="/termsandconditions">Terms & Conditions</Link></label>
          <label>  Accept our </label> <a rel="noopener noreferrer" href="http://localhost:3000/IndTraineetermsandconditions" target="_blank">Terms & Conditions</a>
        
        </div>

        <button disabled={!agree} className="btn" onClick={handleSubmit}>
          Sign Up
        </button>

      

      {error && <div className="error">{error}</div>}
    </form>


    
    
    

  )
}

export default Signup