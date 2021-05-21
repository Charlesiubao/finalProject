import {Route, Redirect} from 'react-router-dom'
import {Switch} from 'react-router-dom'

import Navbar from './components/Navbar'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
    </div>
  );
}

export default App;
