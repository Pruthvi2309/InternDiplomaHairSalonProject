import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './Component/product.jsx'
import Prot from './Component/prot.jsx'
import RegistrationForm from './Component/RegistrationForm';
import Login1 from './Component/login1'
import Forgot from './Component/forgot'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RegistrationForm/>
      {/* <Prot/> */}
      {/* <Forgot/> */}
      {/* <Login1/> */}
    </>
  )
}

export default App
