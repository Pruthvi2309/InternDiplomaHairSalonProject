import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Product1 from './Product/Product1';
import Cards from './Product/Cards';
import Home from './Home/Home';
import Login1 from './Login/login1';
import Forgot from './Forget/forgot';
import { Routes,Route } from 'react-router-dom';
import Female from './Services/Female';
import Male1 from './Services/Male1';
import Contact from './Contact/Contact';
import Appiontment1 from './Appiontment/Appiontment';
import Product2 from './Product/Product2';
import Abo from './About/Abo';
import Footer from './Footer/Footer';
import Register from './Registration/Register';
import Nav from './Nav/Nav';

function App() {
  return (
    <>
     {/* <Product1/> */}
     {/* <Product2/> */}
     {/* <Cards/> */}
     <Nav/>   
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/Male1' element={<Male1/>}/>
        <Route path='/Female' element={<Female/>}/>
        <Route path='/Abo' element={<Abo/>}/>
        <Route path='/Cards' element={<Cards/>}/>
        <Route path='/Product1' element={<Product1/>}/>
        <Route path='/Product2' element={<Product2/>}/>
        <Route path='/Appiontment' element={<Appiontment1/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Login1' element={<Login1/>}/>
        <Route path ='/Forgot' element={<Forgot/>}/>
    </Routes>
    <Footer/>
     {/* <Login1/> */}
     {/* <Forgot/> */}
     {/* <Female/> */}
     {/* <Male1/> */}
    {/* <Contact/> */}
    {/* <Appiontment1/> */}
    {/* <Home/> */}
    {/* <Aboutvan/> */}
    {/* <Abo/> */}
    {/* <Slider/> */}
    {/* <Register/> */}

    </>
  )
}

export default App
