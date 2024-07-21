import Navbar from "./components/Navbar";
import {Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import UserDetails from "./components/UserDetails";
import Payment from "./components/Payment";

import { useState } from "react";

const App = () => {
  const[isLoggedIn,setIsLoggedIn] = useState(false);
  return (
    <div>
      <div className="bg-blue-600">
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/SignIn" element={<SignIn setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/SignUp" element={<SignUp setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/Dashboard" element={<Dashboard isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/UserDetails" element={<UserDetails/>}/>
        <Route path="/Payment" element={<Payment/>}/>
      </Routes>
    </div>
  )
};

export default App;
