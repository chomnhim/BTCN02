import MovieCard from "./MovieCard";
import { mockMovies } from "../data/mockMovies";

function MovieList({ title }) {
  return (
    <section>
      <h2>{title}</h2>
      <div className="movie-grid">
        {mockMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}

export default MovieList;
