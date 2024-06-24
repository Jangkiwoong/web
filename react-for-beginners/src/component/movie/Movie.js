import { useState, useEffect } from "react";

const Movie = () => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const getMovie = async () => {
      const response = await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      );
      const json = await response.json();
      setMovie(json.data.movies);
      setLoading(false);
    };
    getMovie();
  }, []);
  console.log(movie);
  return (
    <div>
      <h1>Movie!</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movie.map((movie) => (
            <div key={movie.id}>{movie.title} </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Movie;
