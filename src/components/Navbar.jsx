import { useState } from "react";
import {FaShoppingCart} from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {toast} from "react-hot-toast";

const Navbar = ({isLoggedIn,setIsLoggedIn}) => {
  const {cart} = useSelector((state) => state);
  const [show,setShow] = useState(false);

  return (
    <div className="text-white">
      <nav className="flex flex-row justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/">
          <div className="ml-5 w-[200px] ">
            <img className="w-3/6 p-4"src="https://media.istockphoto.com/vectors/ecommerce-buying-vector-illustration-logo-in-flat-style-vector-id1133937441?k=20&m=1133937441&s=612x612&w=0&h=ivoew5ZA8soZVQ3pf8XphV6RmHygkeMWXS4Rd4z4Zcc=" alt=""/>
          </div>
        </NavLink>
          <div className="flex items-center font-medium text-slate-100 mr-5">
            <div className="w-[100px]  relative" >
              <img onClick = {() => setShow(!show)} className="w-2/6 rounded-full border border-black cursor-pointer " src="https://tse1.mm.bing.net/th?id=OIP.VwDAQZfumkNyo17xbrePTgHaHa&pid=Api&P=0&h=180" />
              <div className="absolute top-8 -left-12 ">
              {
                show ? (<div className="bg-pink-300 text-black border rounded-full">
               { !isLoggedIn &&
                <NavLink to="/SignIn">SignIn </NavLink>
               }
               
               { !isLoggedIn &&
                <NavLink to="/SignUp">SignUp</NavLink>
               }
               {
                isLoggedIn && 
                <NavLink to="/" onClick={() => {
                  setIsLoggedIn(false);
                  toast.success("Logged out");}}><div className="w-[120px] text-center">Log Out</div></NavLink>
               }
                </div>) : (<div></div>)
              }
              </div>
            </div>
            <NavLink to="/cart">
              <div className="relative">
              <FaShoppingCart className="text-2xl "/>
              {
                cart.length > 0 &&
                (<span className="absolute -top-1 -right-2 bg-green-600 text-600 text-xs w-5 h-5 flex justify-center items-center animation-bounce rounded-full text-white">
                {cart.length}</span>)
              }
              </div>
            </NavLink>
          </div>
      </nav>
    </div>
  )
};

export default Navbar;
