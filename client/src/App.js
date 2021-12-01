
import { render } from "react-dom";
import './App.css';
import { Navbar } from "./components/Navbar";
import { Homepage } from './pages/Homepage';
import {BrowserRouter, Routes, Route, Switch} from 'react-router-dom';

function App() {
  return (


    <BrowserRouter>
    <div >
 <Navbar/>
    </div>

    <Routes>
<Route exact path ="/" element = {<Homepage/>}/>
</Routes>
    
</BrowserRouter>
  );
} 
export default App;
