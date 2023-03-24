import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Lottie from "react-lottie";
import style from "./Navbar.module.scss";

const Navbar = () => {
  const [animationData, setAnimationData] = useState();
  const getData = () => {
    fetch("lottie/explore-anime.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAnimationData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getData();
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
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        {/* <li>
          <a href="#sponsors">Sponsors</a>
        </li>
        <li>
          <a href="#speakers">Speakers</a>
        </li>
        <li>
          <a href="#team">Team</a>
        </li> */}
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
