import MovieList from "../components/MovieList";

function Home() {
  return (
    <main className="container">
      <MovieList title="Top Revenue Movies" />
      <MovieList title="Most Popular Movies" />
      <MovieList title="Top Rating Movies" />
    </main>
  );
}

export default Home;
