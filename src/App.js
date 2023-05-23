
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';


function App() {
  const [mode, setMode] = useState('dark');
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
    }
    else{
      setMode('light');
    }
  }
  return (
    <>
      {/* <Navbar title="textUtils2" home="home2" /> */}
      <Navbar title="TextUtelsis" mode={mode} toggleMode={toggleMode} />

      <div className="container my-3" >
    <TextForm head="Enter your text to ANALYZE"  summary="Your text summary " prev="Preview" /> 
        {/* <About /> */}

      </div>



    </>
  );
}

export default App;


