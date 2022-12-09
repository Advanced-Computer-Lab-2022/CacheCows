
import { useState } from "react"
import { useSignup } from "../hooks/IndTraineeSignup"
import { Link } from 'react-router-dom'


const Signup = () => {
  const [indv_email, setEmail] = useState('')
  const [indv_pass, setPassword] = useState('')
  const [Name, setName] = useState('')
  const [indv_user, setUser] = useState('')
  const [Country, setCountry] = useState('')
  const [indv_bd, setBirthday] = useState('')
  const {signup, error, isLoading} = useSignup()

  const [agree, setAgree] = useState(false);

  const checkboxHandler = () => {
    // if agree === true, it will be set to false
    // if agree === false, it will be set to true
    setAgree(!agree);
   
  }


  const handleSubmit = async (e) => {
    e.preventDefault()


    await signup(indv_email, indv_pass, Name, indv_user, Country, indv_bd)
  }

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up As A Trainee</h3>
      
      <label>Email address:</label>
      <input 
        type="indv_email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={indv_email} 
      />
      <label>Password:</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={indv_pass} 
      />
      <label>Name:</label>
      <input 
        type="Name" 
        onChange={(e) => setName(e.target.value)} 
        value={Name} 
      />
      <label>Username:</label>
      <input 
        type="indv_user" 
        onChange={(e) => setUser(e.target.value)} 
        value={indv_user} 
      />
      <label>Country : </label>
      <input 
        type="country" 
        onChange={(e) => setCountry(e.target.value)} 
        value={Country} 
      />
      <label>Birthday:</label>
      <input 
        type="indv_bd" 
        onChange={(e) => setBirthday(e.target.value)} 
        value={indv_bd} 
      />
      
      <div>
          <input type="checkbox" id="agree" onChange={checkboxHandler} />
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