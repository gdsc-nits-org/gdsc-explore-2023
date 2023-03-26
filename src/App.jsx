import { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Error } from "./Pages";
import { Navbar, Footer } from "./Components";

const App = () => {
  const aboutRef = useRef(null);
  const rulesRef = useRef(null);
  return (
    <>
      <Navbar aboutRef={aboutRef} />
      <Routes>
        <Route path="/" element={<Home aboutRef={aboutRef} rulesRef={rulesRef} />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
