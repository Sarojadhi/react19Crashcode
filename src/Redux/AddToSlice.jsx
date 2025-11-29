import React from "react";
import { useSelector, useDispatch } from "react-redux";

const AddToSlice = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.cart.count);

  return (
    <div
      className="relative cursor-pointer group"
      onClick={() => dispatch(addToCart())} 
    >
      <span className="text-2xl transition-transform duration-200 group-hover:scale-110">
        🛒
      </span>

      <span
        className="
          absolute -top-2 -right-2 
          bg-red-600 text-white text-xs font-semibold
          rounded-full w-5 h-5 
          flex items-center justify-center 
          group-hover:bg-blue-600
        "
      >
        {count}
      </span>
    </div>
  );
};

export default AddToSlice;
