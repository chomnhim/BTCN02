const posters = [
];

export default function MovieSlider({ title }) {
  return (
    <section className="slider">
      <h3>{title}</h3>
      <div className="row">
        <button className="arrow">‹</button>
        {posters.map((p, i) => (
          <img key={i} src={p} alt="movie" />
        ))}
        <button className="arrow">›</button>
      </div>
    </section>
  );
}
