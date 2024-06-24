import PropTypes from "prop-types"

const MovieDetaile = ({movie, loading}) => {
    return(
        <div>
            <h1>Movie!</h1>
            {loading ? ( <h1>Loading...</h1>) : (
                <div>
                {movie.map((movie) => (
                    <div key={movie.id}>
                    <h2>{movie.title}</h2>
                    <img src={movie.medium_cover_image} alt={movie.title} />
                    <p>{movie.summary}</p>
                    <ul>
                        {movie.genres.map((genres, index) => <li key={index}>{genres}</li>)}
                    </ul>
                    </div>
                ))}
                </div>
            )}
        </div>
    );
}
MovieDetaile.propTypes = {
    movie: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
}

export default MovieDetaile;