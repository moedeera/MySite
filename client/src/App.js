import logo from './logo.svg';
import { Homepage } from './pages/Homepage';
import Projects from './pages/Projects';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";


import './App.css';

function App() {
  
  return (
    <BrowserRouter>
   
    <div className="App">
    <Homepage/>

 
 <Routes>

<Route path='/' element={<Homepage/>} />

 </Routes>
   





    </div>
   
</BrowserRouter>

  );
}


export default App;