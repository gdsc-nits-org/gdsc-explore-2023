import { useRef, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Error } from "./Pages";
import { Navbar, Footer, Loader } from "./Components";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const aboutRef = useRef(null);
  const rulesRef = useRef(null);
  const registerRef = useRef(null);
  const teamRef = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {isLoading && <Loader />}
      <Navbar aboutRef={aboutRef} teamRef={teamRef} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              aboutRef={aboutRef}
              rulesRef={rulesRef}
              registerRef={registerRef}
              teamRef={teamRef}
              onLoad={setIsLoading}
            />
          }
        />
        <Route path="*" element={<Error onLoad={setIsLoading} />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
