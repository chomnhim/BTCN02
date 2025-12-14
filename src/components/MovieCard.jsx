function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={movie.poster} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>⭐ Rating: {movie.rating}</p>
      <p>⏱ Length: {movie.length}</p>
      <p>📅 Year: {movie.year}</p>
    </div>
  );
}

export default MovieCard;
