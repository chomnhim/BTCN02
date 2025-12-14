import { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import MovieHero from "./components/MovieHero";
import MovieSlider from "./components/MovieSlider";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Navbar />
      <main className="container">
        <MovieHero />
        <MovieSlider title="Most Popular" />
        <MovieSlider title="Top Rating" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
