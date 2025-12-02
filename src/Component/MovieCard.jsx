// MovieCard.jsx
import React from "react";

const MovieCard = ({ movieData }) => {
  const { Title, Poster, Year, imdbID } = movieData;

  return (
    <li className="list-none bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
      <div className="relative">
        <img
          src={Poster}
          alt={Title}
          className="w-full h-64 object-cover"
        />
        <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
          {Year}
        </span>
      </div>
      <div className="p-4 flex flex-col justify-between h-40">
        <h3 className="font-bold text-lg mb-2 truncate">{Title}</h3>
        <small className="text-gray-400 mb-4 block truncate">ID: {imdbID}</small>
        <button className="mt-auto bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
          View Details
        </button>
      </div>
    </li>
  );
};

export default MovieCard;
