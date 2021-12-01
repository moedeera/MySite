import logo from './logo.svg';
import { Homepage } from './pages/Homepage';
import {BrowserRouter, Routes, Route, Switch} from 'react-router-dom';

import './App.css';

function App() {
  
  return (
    <BrowserRouter>
    <div className="App">
    <Homepage/>
    </div>
      
</BrowserRouter>
  );
}


export default App;