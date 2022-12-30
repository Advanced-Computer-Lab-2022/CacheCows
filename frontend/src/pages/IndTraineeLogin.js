import { useState } from "react"
import { useLogin } from "../hooks/IndTraineeLogin"
import { useNavigate, useParams } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()
  const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(username, password)
  }

  return (
    <div className="pages">
      <br></br>

    <form className="login" onSubmit={handleSubmit}>
      <h3>Log In</h3>
      
      <label>Username :</label>
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
         <p>
         <button className="forgotpass" onClick={()=>navigate("/indvforgetpassword")}>Forgot password</button>
         </p>
       
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