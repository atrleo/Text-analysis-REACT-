
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';


function App() {
  const [mode, setMode] = useState('light');
  const [change, setChange] = useState("Enable DarkMode ")
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      setChange('Enable LightMode');
      document.body.style.backgroundColor = "#4f4f4f";
    }
    else{
      setMode('light');
      setChange('Enable DarkMode');
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <>
      {/* <Navbar title="textUtils2" home="home2" /> */}
      <Navbar title="TextUtelsis" mode={mode} toggleMode={toggleMode} change={change}/>

      <div className="container my-3" >
    <TextForm head="Enter your text to ANALYZE" mode={mode} summary="Your text summary " prev="Preview" /> 
        {/* <About /> */}

      </div>



    </>
  );
}

export default App;


