import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'




const NavigationBar = () =>{

    const { logout } = useLogout()
    const { user } = useAuthContext()
    const usertype = localStorage.getItem('type')


  const handleClick = () => {
    logout()
  }

    return (
        <header>
            <div className="container" >
                <Link to ="/"><h1>Rubix            </h1></Link>
                <Link onClick={() => window.location.href=`/Home?userId=${user._id}`}> Home             </Link>
                
                <Link to="/about"> About Us        </Link>

         <nav>
                 {user && (
                   <div>
              <span>Welcome {user.username} !</span>
              <Link to="/"> 
                 <button onClick={handleClick}>Log out</button> 
              </Link>
            </div>
          )}
          {!user && (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          )}
        </nav>
            </div>
        </header>
       


    )
}

export default NavigationBar