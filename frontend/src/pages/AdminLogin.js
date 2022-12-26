import { useState } from "react"
import { useLogin } from "../hooks/AdminLogin"
import { useNavigate } from "react-router-dom";
//import Admin from "./pages/Admin";
import { Link } from 'react-router-dom'






const Login = () => {

  const navigate=useNavigate();

  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()


  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(username, password)
    
    const log = await login(username, password)
  }
  


  return (
    <div className="pages">
      <br></br>
    <form className="login" onSubmit={handleSubmit}>
      <h1>Welcome</h1>
      <br></br>
      
      <label>Username </label>
      <input 
        type="username" 
        onChange={(e) => setUsername(e.target.value)} 
        value={username} 
      />
      <label>Password:</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />
      
         <button className="loginpress" disabled={isLoading}>Log in</button>
         
         
       
      {error && <div className="error">{error}</div>}    </form>
      
      <div>
      
      <br/>
      <br/><br/>
      <br/><br/>
      <br/><br/>
      <br/><br/>
      <br/>

      </div>
      </div>
  )
  
}

export default Login