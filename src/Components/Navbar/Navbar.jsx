import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Lottie from "react-lottie";
import style from "./Navbar.module.scss";

const Navbar = ({ aboutRef }) => {
  const [animationData, setAnimationData] = useState();

  useEffect(() => {
    fetch("lotties/explore-anime.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAnimationData(data);
      })
      .catch(() => {
        setAnimationData(null);
      });
  }, []);

  const [isClicked, setIsClicked] = useState(false);

  const toggleClicked = () => {
    setIsClicked(!isClicked);
  };

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData,
  };
  const [stopped, setStopped] = useState(true);
  const handleHover = () => {
    setStopped(!stopped);
  };

  return (
    <nav className={style.navbar}>
      <div className={style.brand} onMouseEnter={handleHover} onMouseLeave={handleHover}>
        <div className={style.img}>
          <Lottie options={defaultOptions} isStopped={stopped} />
        </div>
        <h2>GDSC Explore</h2>
      </div>
      <ul className={isClicked ? style.activelinks : ``}>
        <li>
          <button
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            Home
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              aboutRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            About
          </button>
        </li>
      </ul>
      <div
        className={isClicked ? `${style.hamburger} ${style.active}` : style.hamburger}
        onClick={toggleClicked}
      >
        {isClicked ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
