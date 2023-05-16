
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      {/* <Navbar title="textUtils2" home="home2" /> */}
      <Navbar title="TextUtelsis" />

      <div className="container my-3" >
    {/* <TextForm head="Enter your text to ANALYZE"  summary="Your text summary " prev="Preview" />  */}
        <About />

      </div>



    </>
  );
}

export default App;


