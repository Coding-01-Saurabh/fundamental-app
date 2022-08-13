// import logo from './logo.svg';
// import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Forms from './components/Forms';
import React, { useState } from 'react';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

// import About from './components/About';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert =(message,type) =>{
    setAlert({
      msg: message,
      typ: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = () =>{
    if(mode=== 'light'){
    setMode('dark');
    document.body.style.backgroundColor ='#10365b';
    showAlert("Dark mode has been enabled", "success");
  }
  else{
    setMode('light');
    document.body.style.backgroundColor ='white';
    showAlert("Light mode has been enabled", "success");
  }
  }
  return (
   <>
   <Router>
   <Navbar  title = "iCoder" mode = {mode} toggleMode = {toggleMode}/>
   <Alert alert ={alert}/>
  <div className="container my-3"> 
  <Routes>
          <Route path="/about" element= {<About />}/>

          <Route path="/" element = {<Forms headings = "Enter The Text Below" z = {showAlert} mode ={mode}/>}/>
          <Route path="*" element= {<h1>Error 404! The Page is Not Found.</h1>}/>
        </Routes>
  </div>
   </Router>
   </>
  );

}
export default App;
