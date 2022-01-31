import React from 'react';
import Home from "./Pages/Home/home";
import Profile from "./Pages/Profile/profile";
import Login from "./Pages/Login/login";
import {Routes , Route} from "react-router-dom";


function App() {

  return (
    <>
    <Routes>
      <Route path="" element={<Login/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="profile" element={<Profile/>}/>
    </Routes>
    </>
  );
}

export default App;
