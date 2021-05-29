// import {useState} from 'react'
// import axios from 'axios'
// import { useContext } from 'react'
// import { UserContext } from '../contexts/UserContext'
// import {Redirect} from 'react-router-dom'

// const Login = () => {
//   const [email, setEmail] = useState ('')
//   const [password, setPassword] = useState ('')
//   const { userState, fetchUser} = useContext(UserContext)
//   const [user, setUser] = userState
//   const [shouldRedirect, setShouldRedirect] = useState(false)

//   const loginForm = (e) => {
//       e.preventDefault()
      
//       axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/login`, {email, password})
//       .then((response) => {
//           console.log(response)
//           localStorage.setItem('userId', response.data.userId)
//           fetchUser()
//           setUser(response.data)
//           setShouldRedirect(true)
//       })
//   }

//   return (
//     <div className="loginPage">
//     { shouldRedirect && <Redirect to={`/`} exact /> }
//     <form className ="loginForm" onSubmit={loginForm}>
//           <h2>Welcome back!</h2>
          
//             <input placeholder="Email" value={email} onChange ={(e) => setEmail(e.target.value)} />
//             <input placeholder="Password" value={password} onChange ={(e) => setPassword(e.target.value)} />
//             <input className="button" type="submit" value = "Login!"/>
        
//     </form>
//     </div>
//   )
// }

// export default Login

import SignupLoginForm from '../components/SignupLoginForm'


const Login = () => {
    return(
        <SignupLoginForm 
        buttonText="LOGIN"
        route="/user/login"
        message="Welcome back!"
        title="LOGIN"
        />
    )
}

export default Login
