import { useState, useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Reviews from "./components/Reviews";
import Preloader from "./ui/Preloader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Header />
          <Home />
          <About />
          <Portfolio />
          <Reviews />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;
