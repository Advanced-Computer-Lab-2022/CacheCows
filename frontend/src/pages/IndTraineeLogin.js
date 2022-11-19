import { useState } from "react"
import { useLogin } from "../hooks/IndTraineeLogin"


const Login = () => {
  const [indv_email, setEmail] = useState('')
  const [indv_pass, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()


  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(indv_email, indv_pass)
  }

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Log In</h3>
      
      <label>Email address:</label>
      <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={indv_email} 
      />
      <label>Password:</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={indv_pass} 
      />
      
         <button disabled={isLoading}>Log in</button>
       
      {error && <div className="error">{error}</div>}    </form>
  )
}

export default Login