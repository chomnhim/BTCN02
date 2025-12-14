export default function Header({ darkMode, setDarkMode }) {
  return (
    <header className="header">
      <div className="left">
        <b>MSSV:</b> 23122047
      </div>

      <h2>Movies info</h2>

      <div className="right">
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </header>
  );
}
