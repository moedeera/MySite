
import Homepage  from './pages/Homepage';
import Projects from './pages/Projects';
import {
  BrowserRouter as
  Router,
  Route,
  Switch
} from "react-router-dom";


import './App.css';

function App() {
  
  return (
    <Router>
   
    <div className="App">
    <Homepage/>

  </div>


<Route exact path='/' component={Homepage} />
<Switch>
<Route exact path="/Projects" component={Projects} />
</Switch>





   
   
</Router>

  );
}


export default App;