
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import React, { useState } from 'react';
import {
  BrowserRouter as Router,

  Route,
  Routes,

} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [change, setChange] = useState("Enable DarkMode ");
  const [alert, setAlert] = useState(null);
  const showAlert = (messege, type) => {
    setAlert({
      msg: messege,
      type: type
    });
    setTimeout(() => {
      showAlert(null);
    }, 3000);
  }



  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setChange('Enable LightMode');
      document.body.style.backgroundColor = "#4f4f4f";
      showAlert('DarkMode has been Enabled', 'success');
    }
    else {
      setMode('light');
      setChange('Enable DarkMode');
      document.body.style.backgroundColor = "white";
      showAlert('LightMode has been Enabled', 'success');

    }
  };

  return (
    <>

      {/* <Navbar title="textUtils2" home="home2" /> */}
      <Router>
        <Navbar title="TextAnalysis" mode={mode} toggleMode={toggleMode} change={change} />
        <Alert alert={alert}/>

        <div className="container my-3" >
          <Routes>
            <Route path="/about" element={<About mode={mode}/>}>

            </Route>

            <Route path="/" element={<TextForm head="Try TextAnalysis" showAlert={showAlert} mode={mode} summary="Your text summary " prev="Preview" />}>

            </Route>
          </Routes>




        </div>

      </Router>

    </>
  );
}


export default App;


