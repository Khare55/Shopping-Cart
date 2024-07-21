import { useEffect ,useState} from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";
import {toast} from "react-hot-toast"

const Cart = ({isLoggedIn}) => {
  const {cart} = useSelector( (state) => state);
  const [totalAmount,setTotalAmount] = useState(0);
  const navigate = useNavigate();
    useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0));
  },[cart]);

  function toUserDetail( ){
    if(isLoggedIn){
      navigate("/UserDetails");
    }
    else{
      toast.error("Please Login/Signup");
    }
  }

  return(
    <div className="w-full flex flex-col">
    {
      cart.length > 0 ?
      (<div className="w-full max-w-[800px] flex flex-row mx-auto my-3 gap-x-6">

        <div className="flex flex-col">
          {
            cart.map( (item,itemIndex) => (
              <CartItem key = {item.id} item={item} itemIndex={itemIndex}/>
            ))
          }
        </div>

        <div className="flex flex-col text justify-between">

          <div className="flex flex-col">
              <div className="text-green-600 text-2xl font-semibold">Your Cart</div>
              <div className="text-green-600 text-4xl uppercase font-bold">Summary</div>
              <p className="font-semibold text-xl">Total item: {cart.length}</p>
          </div>

          <div className="font-semibold mb-3">
            <p className="font-semibold text-xl">Total Amount : <span className="font-bold">${totalAmount} </span></p>
            <button onClick={toUserDetail} className="border px-7 py-2 bg-green-600 text-white mt-3 rounded-md hover:scale-105 hover:bg-green-700 transition-all duration-300 ease-in">
             CheckOut Now
            </button>
          </div>
        </div>
      </div>) :
      (<div className="text-lg font-semibold flex flex-col justify-center items-center h-[85vh]">
        <h1> Your cart is empty! </h1>
        <Link to={"/"}>
          <button className="border px-7 py-2 bg-green-600 text-white mt-3 rounded-md hover:scale-105 hover:bg-green-700 transition-all duration-300 ease-in">
            Shop Now
          </button>
        </Link>
      </div>)
    }
    </div>
  );
};

export default Cart;
