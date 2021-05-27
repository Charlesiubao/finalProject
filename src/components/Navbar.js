import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { Link, Router, useHistory } from 'react-router-dom'
import logo from '../assets/sitelogo.png'

const Navbar = ()=>{
    const { userState } = useContext(UserContext)
    const [user, setUser] = userState
    let history = useHistory()

    const returnHome = () => {
        history.push("/")
    }

    return(

        <div className="headerSection">
            <div className="logo">
                <span className="homeTitle"><img src={logo} alt='grow' /></span>
            </div>
            
            <div>
            <nav className="navbar" style={{textAlign:"right"}}>
            {user &&
                <p 
                style={{textAlign:"left", padding:"10px", margin:"0",backgroundColor:"black"}}>
                    Hello {user.name.charAt(0).toUpperCase() + user.name.slice(1)}!
                </p>
            }
        
            <span className="navLinks">
            <Link to="/">Home</Link>{' | '}
            </span>
                {user ? 
                <span>  
                <span className="navLinks">
                <Link to="/post">Posts</Link>{' | '}
                </span>               
                
                <span className="navLinks">
                <Link to=" " onClick ={(e) => {
                    e.preventDefault()
                    localStorage.removeItem('userId')
                    setUser(null)
                    returnHome()
                }}>Logout</Link>{' | '}
                </span>
                
            </span> 
            :      
            <span >
                <span className="navLinks">
                <Link to="/signup">Sign Up</Link>{' | '}
                </span>
                <span className="navLinks">
                <Link to="/login">Login</Link>
                </span>
            </span>
            }
            </nav>
            </div>
        </div>
    )
}

export default Navbar