import {Link} from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="dark:bg-white rounded overflow-hidden shadow-lg">
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
        <a href={movie.url} target="_blank" rel="noreferrer" className="text-xs">YTS URL LINK</a>
      </div>
    </div>
  );
};

export default MovieCard;
