
import Homepage  from './pages/Homepage';
import Projects from './pages/Projects';
import {
  BrowserRouter as
  Router,
  Route,
  Switch
} from "react-router-dom";


import './App.css';
import Navbar from './components/Navbar';

function App() {
  
  return (
    <Router>
   
    <div className="App">
      <Navbar/>
<Route exact path='/' component={Homepage} />
<Switch>
<Route exact path="/Projects" component={Projects} />
</Switch>

  </div>








   
   
</Router>

  );
}


export default App;