import { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import "./index.css";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <Header toggleDarkMode={() => setDark(!dark)} />
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
