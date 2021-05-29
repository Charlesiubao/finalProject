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
        
            <span className="navLinks">
            <Link to="/">Home</Link>{' | '}
            </span>
            <span className="navLinks">
                <Link to="/profile">Upload</Link>{' | '}
                </span>        
                {user ? 
                <span>  
                <span className="navLinks">
                <Link to="/profile">Profile</Link>{' | '}
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
                <Link to="/login">Login</Link>{' | '}
                </span>
                <span className="navLinks">
                <Link to=" " onClick ={(e) => {
                    e.preventDefault()
                    localStorage.removeItem('userId')
                    setUser(null)
                    returnHome()
                }}>Logout</Link>
                </span>
            </span>
            }
            </nav>
            </div>
        </div>
    )
}

export default Navbar