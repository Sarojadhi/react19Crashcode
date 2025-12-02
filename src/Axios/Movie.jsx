// Movie.jsx
import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../Component/MovieCard";

const Movie = () => {
  const [data, setData] = useState([]);
  const api = "https://www.omdbapi.com/?apikey=1c12799f&s=titanic&page=1";

  const getMovieData = async () => {
    try {
      const resp = await axios.get(api);
      setData(resp.data.Search);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Movie List</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data.map((item) => (
          <MovieCard key={item.imdbID} movieData={item} />
        ))}
      </ul>
    </div>
  );
};

export default Movie;
