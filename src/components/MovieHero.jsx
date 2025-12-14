export default function MovieHero() {
  return (
    <section className="hero">
      <button className="arrow">‹</button>

      <div className="poster">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Sherlock_Jr_poster.jpg"
          alt="movie"
        />
        <h3>Sherlock Jr. (1924)</h3>
      </div>

      <button className="arrow">›</button>
    </section>
  );
}
