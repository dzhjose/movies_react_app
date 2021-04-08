import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getMovieDetail = async () => {
      
      const rs = await axios.get(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
      );
      setMovie(rs.data.data.movie);
    };

    getMovieDetail();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="flex">
        <div className="bg-gray-100 rounded p-4 w-1/5 text-center">
          <img src={movie.medium_cover_image} alt="" />
        </div>
        <div className="p-4 w-auto flex-1">
          <h2 className="text-4xl">{movie.title_long}</h2>
          <div className="flex mt-2">
            {movie.genres && movie.genres.length ? movie.genres.map((g) => (
              <span className="m-2 text-gray-500 dark:text-white">{g}</span>
            )) : 'whitout tags'}
          </div>
          <p className="text-sm text-gray-500 dark:text-white">
              Rating: {movie.rating}
          </p>
          <section className="mt-2">
                <p className="text-justify">
                    {movie.description_full !== "" ?  movie.description_full : 'no description...'}
                </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Detail;
