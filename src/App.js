import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState  ,useEffect } from 'react';
import Hospitals from "./HospitalList.js";
import Login from "./LoginPage.js";
import Home from "./home.js";
import NotFound from"./serverNotFound.js";

import { BrowserRouter , Routes , Route } from 'react-router-dom';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthentication = localStorage.getItem('isAuthenticated');
    if (checkAuthentication) {
      setIsAuthenticated(true);
    }
  }, []);
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" >
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/Hospitals-In-Egypt-For-Verified-Accounts/" element={<Home/>} ></Route>
        <Route path="/home" element={<Home/>} ></Route>
        <Route path="/hospitals" element={<Hospitals/>}></Route>
        
        <Route path="*" element={<NotFound/>}></Route>
        </Route>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
