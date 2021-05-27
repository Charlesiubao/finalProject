import './App.css';
import {Route, Redirect} from 'react-router-dom'
import axios from 'axios'
import {useState, useEffect, useContext} from 'react'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Profile from './pages/Profile'
import {UserContext} from './contexts/UserContext'


// import MyPost from './pages/MyPost'



function App() {
  

  const {userState} = useContext(UserContext)

  const [ user, setUser  ]= userState

  return (
    <div className="App" >
      <Navbar />
      <Route exact path ="/" render={() => <Home /> } />
      <Route
        path="/signup"
        render={()=>
          <Signup setUser={setUser}/>
        }
      />
      <Route 
        exact path="/login"
        render={()=> {
          if (user) {
            return <Redirect to = '/' />
            
          } else {
            return <Login setUser={setUser} />
          }
        }
        }
      />
      <Route path="/profile" render={()=>{
        return <Profile/>
      }}/>
    </div>
  );
}

export default App;
