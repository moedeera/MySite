
import { Homepage } from './pages/Homepage';
import Projects from './pages/Projects';
import {
  BrowserRouter as
  Router,
  Route,
  Routes
} from "react-router-dom";


import './App.css';

function App() {
  
  return (
    <Router>
   
    <div className="App">
    <Homepage/>

  </div>



<Routes>
  <Route exact path='/' element={<Homepage/>} />
<Route path="/Projects" element={Projects} />
</Routes>





   
   
</Router>

  );
}


export default App;