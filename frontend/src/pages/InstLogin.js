import { useState } from "react"
import { useLogin } from "../hooks/InstLogin"
import { useNavigate, useParams } from "react-router-dom";
//import { useAuthContext } from '../hooks/useAuthContext'



const Login = () => {
 // const {user} = useAuthContext();

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()
  const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(username, password)
  //  window.location.href=`/Home?userId=${user._id}`

  }

  return (
    <div className="pages">
                  <button className="back" onClick={() => navigate(-1)}> ❮ Back </button>

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
         <button className="forgotpass" onClick={()=>navigate("/instforgetpassword")}>Forgot password</button>
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