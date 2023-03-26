import { useState, useEffect, useRef } from "react";
import Lottie from "react-lottie";
// import Fade from "react-reveal/Fade";
import { Fade } from "react-awesome-reveal";

import Button from "../Button/Button";
import style from "./Hero.module.scss";

const Hero = ({ rulesRef }) => {
  const [exploreAnimationData, setExploreAnimationData] = useState();
  const [scrollAnimationData, setScrollAnimationData] = useState();
  const homeRef = useRef(null);

  useEffect(() => {
    fetch("lotties/explore.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setExploreAnimationData(data);
      });

    fetch("lotties/scroll.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setScrollAnimationData(data);
      });
  }, []);

  const exploreLottieOptions = {
    loop: true,
    autoplay: false,
    animationData: exploreAnimationData,
  };

  const scrollLottieOptions = {
    loop: true,
    autoplay: true,
    animationData: scrollAnimationData,
  };

  return (
    <div className={style.hero} ref={homeRef}>
      <div className={style.left}>
        <Fade direction="up" triggerOnce damping={0.1}>
          <h1>
            <span style={{ color: "#547DBF" }}>G</span>
            <span style={{ color: "#EB4335" }}>D</span>
            <span style={{ color: "#FBBC12" }}>S</span>
            <span style={{ color: "#30A953" }}>C</span>&nbsp;Explore
          </h1>
          <h2>Explore the Developers from the Northeast</h2>
          <p>
            <img src="/assets/images/clock.svg" alt="timer" />
            From 6th April to 8th April
          </p>
          <div className={style.btn}>
            <Button type="primary">Register</Button>
            <Button type="secondary" rulesRef={rulesRef}>
              Rules and Regulations
            </Button>
          </div>
        </Fade>
      </div>
      <div className={style.right}>
        <Lottie options={exploreLottieOptions} height={450} width={450} />
      </div>
      <button
        className={style.scrollbtn}
        onClick={() => {
          window.scrollTo({ top: homeRef.current.offsetHeight, behavior: "smooth" });
        }}
      >
        <Lottie options={scrollLottieOptions} height={50} width={50} />
      </button>
    </div>
  );
};

export default Hero;
