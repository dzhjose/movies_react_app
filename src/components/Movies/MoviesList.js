import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import {Spinner} from "../Spinners";

//const API_KEY = "SR2CFqwNTIr31EOfeXO5ERMrqWiXkw6zKjQuSqbH";
//https://api.watchmode.com/v1/list-titles/?apiKey=${API_KEY}

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [paginate, setPaginate] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const paginateMoviesList = async (paginate) => {
      const rs = await axios.get(
        `https://yts.mx/api/v2/list_movies.json?limit=12&sort_by=year&page=${paginate}`
      );
      setMovies((movies) => [...movies, ...rs.data.data.movies]);
      setLoading(false);
    };
    setTimeout(() => {
      paginateMoviesList(paginate);
    }, 1000);
  }, [paginate]);

  return (
    <>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">
        {movies?.length > 0
          ? movies.map((item) => {
              return <MovieCard key={item.id} movie={item} />;
            })
          : 'Loading...'}
      </div>
      <div className="flex justify-center">
          
        <button
          type="button"
          className="bg-gray-200 hover:bg-indigo-400 hover:text-white text-black font-bold py-2 px-6 inline-flex justify-center"
          onClick={() => setPaginate(paginate + 1)}
          disabled={loading}
        >
        {
            loading && <Spinner />
          }
          Load more
        </button>
      </div>
    </>
  );
};

export default MoviesList;
