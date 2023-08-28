import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Van from './Components/Van';
// import Hello from './Components/Hello';
// import Aboutus from './Components/Aboutus';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'font-awesome/css/font-awesome.min.css'; // Font Awesome CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JS
// import IntervalClassCounter from './Components/IntervalClassCounter'
// import IntervalHookCounter from './Components/IntervalHookCounter'
// import ClassCounterOne from './Components/ClassCounterOne';
// import HookCounterOne from './Components/HookCounterOne'
// import HookCounter3 from './Components/HookCounter3';
// import HookCounter4 from './Components/HookCounter4';
// import withCounter from './Components/withCounter';
import Home from './Home/Home';
// import Aboutvan from './Components/Aboutvan';
// import About1 from './Components/About1';
// import Nav from './Components/Nav.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Van/>
      <Hello/> */}
      {/* <Aboutus/> */}
      {/* <HookCounter3/> */}
      {/* <HookCounter4/> */}
      {/* <ClassCounterOne/> */}
      {/* <HookCounterOne/> */}
      {/* <IntervalClassCounter/> */}
      {/* <IntervalHookCounter/> */}
      {/* <withCounter/> */}
      <Home/>
      {/* <Nav /> */}
      {/* <Aboutvan/> */}
      {/* <About1/> */}
    </>
  )
}

export default App
