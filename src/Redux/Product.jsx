import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./Slice";

const Product = ({ productData }) => {
  const dispatch = useDispatch();

  return (
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
        <p className="text-xl font-semibold text-green-600">Rs. {productData.price}</p>
        <p className="text-gray-600">{productData.description}</p>

        <button
          onClick={() => dispatch(addToCart(productData))}
          className="mt-3 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
