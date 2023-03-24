import { useState, useEffect } from "react";
import Lottie from "react-lottie";
import Typewriter from "typewriter-effect";
import exploreAnimationData from "./lottie/explore-anime.json";
import scrollAnimationData from "./lottie/scroll.json";
import style from "./Hero.module.scss";

const Hero = () => {
  // Explore Lottie
  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: exploreAnimationData,
  };
  // Scroll Lottie
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: scrollAnimationData,
  };

  // Responsive Scroll Lottie size
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const initialSize = windowWidth <= 768 ? 25 : 64;
  const [scrollLottieSize, setScrollLottieSize] = useState(initialSize);
  const getWindowSize = () => {
    setWindowWidth(window.innerWidth);
    const currentSize = windowWidth <= 768 ? 25 : 64;
    setScrollLottieSize(currentSize);
  };
  useEffect(() => {
    window.addEventListener("resize", getWindowSize);

    return () => {
      window.removeEventListener("resize", getWindowSize);
    };
  }, [windowWidth, getWindowSize]);

  return (
    <section id="hero">
      <div className={style.hero}>
        <div className={style.left}>
          <h1>
            <Typewriter
              options={{
                strings: [
                  `<span style="color: var(--gdsc-blue-3-100);">G</span><span style="color: #eb4335;">D</span><span style="color: #fbbc12;">S</span><span style="color: #30a953;">C</span> Explore`,
                ],
                autoStart: true,
                loop: true,
              }}
            />
            {/* <span className={style.blue}>G</span>
            <span className={style.red}>D</span>
            <span className={style.yellow}>S</span>
            <span className={style.green}>C</span> Explore */}
          </h1>
          <h2>Explore the Developers from the Northeast</h2>
          <p>
            <img src="./images/clock.svg" alt="timer" />
            From 6th April to 8th April
          </p>
          <div>
            <button className={`${style.button} ${style.register}`}>Register</button>
            <button className={`${style.button} ${style.rules}`}>
              Rules and Regulations
            </button>
          </div>
        </div>
        <div className={style.right}>
          <Lottie options={defaultOptions1} height={600} width={600} />
        </div>
      </div>
      <div className={style.scrollLottie}>
        <Lottie
          options={defaultOptions2}
          height={scrollLottieSize}
          width={scrollLottieSize}
        />
      </div>
    </section>
  );
};

export default Hero;
