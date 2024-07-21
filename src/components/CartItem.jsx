import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import {remove} from "../redux/Slices/CartSlice";
import {toast} from "react-hot-toast";
const CartItem = ({item,itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
       dispatch(remove(item.id));
       toast.error("Item removed from Card")
  }

  return (
    <div className="h-full">
      <div className="flex flex-row gap-x-8 mx-auto mt-5">
        <div className="w-4/12 p-1">
          <img src={item.image} />
        </div>
        <div className="flex flex-col gap-y-5">
          <h1 className="font-bold text-xl">{item.title}</h1>
          <p className="text-md">{item.description.substr(0,81) + "..."}</p>
          <div className="flex flex-row justify-between">
            <p className="text-md text-green-600 font-bold">${item.price}</p>
            <div onClick={removeFromCart} className="mr-4 border rounded-full cursor-pointer p-2 bg-red-400">
            <MdDeleteOutline />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
