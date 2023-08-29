import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Home from './Home/Home';
import Appiontment1 from './Appiontment/Appiontment1';
import Abo from './About/Abo';
import Male from './Categories/Male';
import Female from './Categories/Female';
import Contact from './Contact/Contact';
import Forgot from './Forgot/forgot';
import Login from './Login/login1';
import Cards from './Product/Cards';
import Product1 from './Product/Product1';
import Product2 from './Product/Product2';
import RegistrationForm from './Resgistration/RegistrationForm';
import Services from './services/Services';
import { Routes,Route } from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './Header/Header';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Header/> */}
      <Routes>
        <Route path = '/' element={<Home/>}/>
        <Route path = '/contact' element={<Contact/>}/>
        <Route path = '/Male' element={<Male/>}/>
        <Route path = '/Female' element={<Female/>}/>
        <Route path = '/Abo' element={<Abo/>}/>
        <Route path = '/Services' element={<Services/>}/>
        <Route path = '/Cards' element={<Cards/>}/>
        <Route path = '/Product1' element={<Product1/>}/>
        <Route path = '/Product2' element={<Product2/>}/>
        <Route path = '/Appiontment' element={<Appiontment1/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
