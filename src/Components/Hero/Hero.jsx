import { useState, useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";
import Lottie from "react-lottie";
import Button from "../Button/Button";
import Fade from "../Fade/Fade";
import style from "./Hero.module.scss";
import { useMediaQuery } from "../../Hooks";

const Hero = ({ rulesRef, registerRef }) => {
  const [exploreAnimationData, setExploreAnimationData] = useState();
  const [scrollAnimationData, setScrollAnimationData] = useState();
  const homeRef = useRef(null);
  const isMobile = useMediaQuery("(max-width: 602px)");

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
        <h1>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  `<span style="color: var(--gdsc-blue-3-100);">G</span><span style="color: #eb4335;">D</span><span style="color: #fbbc12;">S</span><span style="color: #30a953;">C</span> Explore`
                )
                .start();
            }}
            options={{
              delay: 40,
              cursor: null,
            }}
          />
        </h1>
        <Fade type="bottom">
          <h2>Explore the Developers from the Northeast</h2>
          <p>
            <img src="/assets/images/clock.svg" alt="timer" />
            From 6th April to 8th April
          </p>
          <div className={style.btn}>
            <Button primary={1}>Register</Button>
            <Button
              rulesRef={rulesRef}
              onClick={() => {
                rulesRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
              }}
            >
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
        <Fade type="bottom">
          <Lottie options={scrollLottieOptions} height={50} width={50} />
        </Fade>
      </button>
    </div>
  );
};

export default Hero;
