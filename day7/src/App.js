import './App.css';
import { BrowserRouter, Route, Router, Routes, Link } from 'react-router-dom';
import Home from './day7/Home';
import About from './day7/About';
import Navbar from './day7/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

/*
using Link 
      <BrowserRouter>
      <ul>
        <li>
          <Link to="/home">HOME</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
      </ul>
       <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
       </Routes>
      </BrowserRouter>

      */

export default App;
