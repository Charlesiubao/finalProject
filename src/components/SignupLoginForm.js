import axios from 'axios'
import { useState, useContext } from 'react'



const SignupLoginForm = (props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`${process.env.REACT_APP_BACKEND_URL}${props.route}`, {
            name,
            email,
            password
        })
        .then((response) => {
            console.log(response);
            if(response.data.user){
                console.log(response.data)
                localStorage.setItem('userId', response.data.user.id)
                alert(`Hi, ${response.data.user.name}! ${props.message}`)
                // window.location.reload()
            }
            else if(response.data.error){
                setError(response.data.error)
            }
        })
    }



    return(
        <div>
            <h1>{props.title}</h1>
            {error && 
            <p style={{color:"red"}}>{error}</p>
            }
            <form className="signupForm loginForm" onSubmit={handleSubmit}>
                {props.showName &&
                <>
                <input placeholder="Name" value={name} onChange={(e)=> {setName(e.target.value)}} />
                </>
                }

                <input placeholder="Email" value={email} onChange={(e)=> {setEmail(e.target.value)}} />
                <input placeholder="Password" type="password" value={password} onChange={(e)=> {setPassword(e.target.value)}} />
                <input className="button" id="submit-button" route="/profile" type="submit" value={props.buttonText} />

            </form>
        </div>
    )
}

export default SignupLoginForm