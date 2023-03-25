import { useState, useEffect, useRef } from "react";
import Lottie from "react-lottie";
import Typewriter from "typewriter-effect";
import Button from "../Button/Button";
import style from "./Hero.module.scss";

const Hero = ({ rulesRef }) => {
  const [exploreAnimationData, setExploreAnimationData] = useState();
  const [scrollAnimationData, setScrollAnimationData] = useState();
  const [stopped, setStopped] = useState(true);
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
        <h1>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  `<span style="color: var(--gdsc-blue-3-100);">G</span><span style="color: #eb4335;">D</span><span style="color: #fbbc12;">S</span><span style="color: #30a953;">C</span> Explore`
                )
                .start()
                .callFunction(() => {
                  setStopped(false);
                });
            }}
          />
        </h1>
        <h2>Explore the Developers from the Northeast</h2>
        <p className={stopped ? style.fadeIn1 : `${style.fadeIn1} ${style.show1}`}>
          <img src="./images/clock.svg" alt="timer" />
          From 6th April to 8th April
        </p>
        <div
          className={
            stopped ? `${style.btn} ${style.fadeIn2}` : `${style.fadeIn2} ${style.show2}`
          }
        >
          <Button type="primary">Register</Button>
          <Button type="secondary" rulesRef={rulesRef}>
            Rules and Regulations
          </Button>
        </div>
      </div>
      <div className={style.right}>
        <Lottie
          options={exploreLottieOptions}
          height={450}
          width={450}
          isStopped={stopped}
        />
      </div>
      <button
        className={style.scrollbtn}
        onClick={() => {
          window.scrollTo({ top: homeRef.current.offsetHeight, behavior: "smooth" });
        }}
      >
        <Lottie
          options={scrollLottieOptions}
          height={50}
          width={50}
          isStopped={stopped}
        />
      </button>
    </div>
  );
};

export default Hero;
