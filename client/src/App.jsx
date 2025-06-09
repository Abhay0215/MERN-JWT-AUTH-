import Nbar from "./Nbar";
import Register from './Register';
import Signin from './Signin.jsx';
import Aboutus from "./Aboutus.jsx";
import React from 'react';
import Contactus from './Contactus.jsx';
import Best from './Best/Best.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return(
    
    <>
    <Router>
      <Nbar/>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/best" element={<Best />} />
        <Route path="/contact" element={<Contactus />} />
      </Routes>
    </Router>  
    </>
  );
}

export default App
