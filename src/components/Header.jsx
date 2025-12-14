function Header({ toggleDarkMode }) {
  return (
    <header className="header">
      <h1>Movies Info</h1>
      <p>MSSV: 23122047</p>
      <button onClick={toggleDarkMode}>🌙 Dark mode</button>
    </header>
  );
}

export default Header;
