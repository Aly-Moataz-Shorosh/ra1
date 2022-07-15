import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar.jsx'
import Home from './components/home/home.jsx'
import Portfolio from './components/portfolio/portfolio.jsx'
import About from './components/about/about.jsx'
import Contact from './components/contact/contact.jsx'

import {Outlet, Route, Routes} from 'react-router-dom'

function App() {
  return <>

  <Navbar/>


  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="portfolio" element={<Portfolio/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="contact" element={<Contact/>}/>
  </Routes>
  </>;
}

export default App;
