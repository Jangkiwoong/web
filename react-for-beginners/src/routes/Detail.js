import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// import styled from "styled-components";
// const styledDetail = styled.Deatil`
//   background-color:purple;
// `;

const Detail = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const getMovie = async () => {
      const response = await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
      );
      const json = await response.json();
      setMovie(json.data.movie);
      setLoading(false);
    };
    getMovie();
  }, [id]);
  console.log(movie);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>
            <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
          </h1>
          <hr />
          <h3>{movie.title}</h3>
          <img src={movie.large_cover_image} alt={movie.title}></img>
          {movie.genres.map((genres) => (
            <li>{genres}</li>
          ))}
          <p>{movie.description_full}</p>
          <p>Runtime : {movie.runtime}</p>
        </div>
      )}
    </div>
  );
};
export default Detail;
