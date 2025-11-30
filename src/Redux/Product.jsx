import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart, clearCart } from "./Slice";

const Product = ({ productData }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="bg-gray-100 shadow-md flex items-center gap-7 px-6 py-4 justify-center">
  <h2 className="text-3xl font-bold text-gray-800">
    Product Details
  </h2>

  <button
    onClick={() => dispatch(clearCart())}
    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition"
  >
    Clear Cart
  </button>
</div>

        <div className="max-w-4xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-xl shadow-md my-6">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src={productData.image}
              alt={productData.title}
              className="w-72 h-72 object-cover rounded-xl shadow-md"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="text-2xl font-bold">{productData.title}</h1>
            <p className="text-xl font-semibold text-green-600">
              Rs. {productData.price}
            </p>
            <p className="text-gray-600">{productData.description}</p>
            <div className="flex gap-4 mt-4">
              <button
                onClick={() => dispatch(addToCart(productData))}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition"
              >
                Add to Cart
              </button>

              <button
                onClick={() => dispatch(removeFromCart(productData))}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition "
              >
                Remove from Cart
              </button>
            </div>
          </div>
        </div>
    </>
  );
};

export default Product;