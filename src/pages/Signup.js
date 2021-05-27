// import {useState} from 'react'
// import axios from 'axios'
// import { useContext } from 'react'
// import { UserContext } from '../contexts/UserContext'
// import {Redirect} from 'react-router-dom'

// const Signup = () => {
//     const [name, setName] = useState ('')
//     const [email, setEmail] = useState ('')
//     const [password, setPassword] = useState ('')
//     const { userState, fetchUser } = useContext(UserContext)
//     const [user, setUser] = userState
//     const [shouldRedirect, setShouldRedirect] = useState(false)

//     const submitForm = (e) => {
//         e.preventDefault()

//         axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/signup`, {name, email, password})
//         .then((response) => {
//             console.log(response)
//             localStorage.setItem('userId', response.data.userId)
//             fetchUser()
//             setUser(response.data.user)
//             setShouldRedirect(true)
//         })
//     }

//     return (
//       <div className="signupPage">
//         { shouldRedirect && <Redirect to={`/`} exact /> }
      
//       <form className="signupForm" onSubmit={submitForm}>
//           <h2>Join us!</h2> 
              
//               <input placeholder="Name" value={name} onChange ={(e) => setName(e.target.value)} />
//               <input placeholder="Email" value={email} onChange ={(e) => setEmail(e.target.value)} />
//               <input placeholder="Password" value={password} onChange ={(e) => setPassword(e.target.value)} />
//               <input className="button" type="submit" value = "Sign Up"/> 
          
//       </form>
//       </div>
//     )
// }

// export default Signup


import SignupLoginForm from '../components/SignupLoginForm'

const Signup = (props) => {
    return(
        <SignupLoginForm 
        showName={true}
        // this true will be passed to props.showName in signuploginForm, and name input will be shown...
        buttonText="SIGN UP"
        route="/user"
        message="You are successfully signed up!"
        title="SIGN UP"
        />
    )
}

export default Signup
