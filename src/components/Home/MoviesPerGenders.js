import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";

const MoviesPerGenders = ({ limit = 4, gender = "horror" }) => {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const rs = await axios.get(
        `https://yts.mx/api/v2/list_movies.json?limit=${limit}&genre=${gender}&sort_by=year`
      );
      setMoviesList(rs.data.data.movies);
    };

    setTimeout(() => {
        
        getMovies();
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
    <h2 className="px-10 mt-4">{gender.toUpperCase()}</h2>
    <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">
      {moviesList.length > 0 ? moviesList.map((movie) => (
        <div className="dark:bg-white rounded overflow-hidden shadow-lg" key={movie.id+1000}>
          <img
            className="w-full"
            src={movie.medium_cover_image}
            alt={movie.title_long}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 dark:text-black">
              <Link to={`/movies/${movie.id}`}>{movie.title_long}</Link>
            </div>
          </div>
          <div className="px-6 pt-4 pb-2">
            {movie.genres.map((g, index) => {
              return (
                <span
                  key={index}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                  {g}
                </span>
              );
            })}
          </div>
          <div className="px-6 font-bold text-gray-500">
            <a
              href={movie.url}
              target="_blank"
              rel="noreferrer"
              className="text-xs"
            >
              YTS URL LINK
            </a>
          </div>
        </div>
      )) : "Loading..."}
      </div>
    </>
  );
};

export default MoviesPerGenders;
