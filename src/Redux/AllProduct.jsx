import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "./ProductSlice";
import { addToCart, removeFromCart, clearCart } from "./Slice"; // FIXED ✓

const AllProduct = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const { item } = useSelector((state) => state.product);

  return (
    <>
      <div className="flex items-center gap-6 p-4">
        <button
          onClick={() => dispatch(clearCart())}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition"
        >
          Clear Cart
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {item &&
          item.map((prod) => (
            <div
              key={prod.id}
              className="bg-white p-4 shadow-md rounded-xl flex flex-col items-center"
            >
              <img
                src={prod.thumbnail}
                alt={prod.title}
                className="w-40 h-40 object-cover rounded-lg"
              />

              <h3 className="text-lg font-bold mt-3">{prod.title}</h3>
              <p className="text-green-600 font-semibold">Rs. {prod.price}</p>

              {/* Buttons */}
              <div className="flex gap-4 mt-4">
                <button
                  onClick={() => dispatch(addToCart(prod))}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md"
                >
                  Add
                </button>

                <button
                  onClick={() => dispatch(removeFromCart(prod))}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-md"
                >
                  Remove
                </button>
              </div>
                </div>
             
          ))}
      </div>
    </>
  );
};

export default AllProduct;
