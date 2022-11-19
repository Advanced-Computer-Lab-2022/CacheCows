import { Link } from 'react-router-dom'

const NavigationBar = () =>{
    return (
        <header>
            <div className="container">
                <Link to ="/">
                    <h1>
                        Rubix
                    </h1>
                </Link>
                <Link to="/"> Home </Link>
                <Link to="/about"> About </Link>
                <nav>
                       <div>
                          <Link to="/login"><hnav> Login</hnav></Link>
                         <Link to="/signup"><hnav> Signup</hnav></Link>
                         </div>
        </nav>

            </div>
        </header>
       


    )
}

export default NavigationBar