import './App.css';
import {Route, Redirect} from 'react-router-dom'
import axios from 'axios'
import {useState, useEffect} from 'react'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'

// import MyPost from './pages/MyPost'



function App() {
  const [ user, setUser ]=useState({})


  return (
    <div className="App" >
      <Navbar />
      <Route 
        exact path ="/"
        render={() => 
          <Home />
        }
      />
      <Route
        path="/signup"
        render={()=>
          <Signup setUser={setUser}/>
        }
      />
      <Route 
        path="/login"
        render={()=>
          <Login setUser={setUser} />
        }
      />
      {/* <Route
      path="/profile"
      render={()=>{
        return <Profile/>
      }}/> */}
    </div>
  );
}

export default App;
