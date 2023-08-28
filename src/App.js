import Chah from './components/chah'
import Vanshil from './components/vanshil';
import './App.css';
import Bhagya from './components/Bhagya';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Greet from './components/Greet';
import Regestration from './components/regestration';
import Message from './components/Message';
import Evebinding from './components/Evebinding';

function App() {
  return (
    <div className="App">
      <Chah/>
      <Vanshil/>
      <Bhagya/>
      <Greet/>
      <Regestration/>
      <Message/>
      <Evebinding/> 
    </div>
  );
}

export default App;
