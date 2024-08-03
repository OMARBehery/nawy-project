import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';
import Apartlist from './components/Apartlist';
import Addapart from './components/Addapart';
import Nav from './components/Nav'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Switch ,Routes} from "react-router-dom";
import Details from './components/Details';



function App() {

   

  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home  />}  />
            
             
        
            <Route  path="/addapart" element={  <Addapart />}/>
            <Route  path="/apart/:id" element={ <Details/>}/>
            <Route  path="/apartlist" element={ <Apartlist/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

