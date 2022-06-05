import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
// import About from './components/About';
import React, { useState } from 'react';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 4000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(52 95 158)';
      showalert("Dark Mode has been enable", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light Mode has been enable", "success")
    }
  }

  return (
    <>
        
      <Navbar title="Text Changer" aboutext="About Text" mode={mode} toggleMode={toggleMode}></Navbar>
      <Alert alert={alert}></Alert>
      <div className="container my-3">
        
         
          <Textform showalert={showalert} heading="Enter the text " mode={mode}></Textform>       
      </div>
       {/* </BrowserRouter> */}
       {/* <BrowserRouter> */}
      {/* <Navbar title="Text Changer" aboutext="About Text" mode={mode} toggleMode={toggleMode}></Navbar>
      <Alert alert={alert}></Alert>
      <div className="container my-3">
    <Routes>
      <Route exact path="/" element={<Textform showalert={showalert} heading="Enter the text " mode={mode}></Textform>}>
              
      </Route>
      <Route exact path="/about" element={<About/>} />
    </Routes>
    </div>
  </BrowserRouter> */}
    </>
  );
}

export default App;
