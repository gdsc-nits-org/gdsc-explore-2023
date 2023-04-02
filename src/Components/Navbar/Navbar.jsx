import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Lottie from "react-lottie";
import style from "./Navbar.module.scss";

const Navbar = ({ aboutRef, teamRef }) => {
  const [animationData, setAnimationData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/lotties/explore-anime.json")
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
          <Link to="/">
            <Lottie options={defaultOptions} isStopped={stopped} />
          </Link>
        </div>
        <h2>GDSC Explore</h2>
      </div>
      <ul className={isClicked ? style.activelinks : ``}>
        <li>
          <button
            onClick={() => {
              navigate("/");
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
              setIsClicked((prev) => !prev);
            }}
          >
            Home
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              navigate("/");
              aboutRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
              setIsClicked((prev) => !prev);
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              teamRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
              setIsClicked((prev) => !prev);
            }}
          >
            Team
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
