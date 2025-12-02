import axios from "axios";
import React, { useEffect } from "react";
import { Await, data } from "react-router-dom";

const Movie = () => {
  const api = "https://jsonfakery.com/movies/paginated";
  const getMovieData = async () => {
    try {
      const resp = await axios.get(api);
      console.log(resp.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMovieData();
  }, []);

  return <div>Movie</div>;
};

export default Movie;
