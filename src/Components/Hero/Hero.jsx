import { useState, useEffect } from "react";
import Lottie from "react-lottie";
import Typewriter from "typewriter-effect";
import Button from "../Button/Button";
import style from "./Hero.module.scss";

const Hero = () => {
  const [exploreAnimationData, setExploreAnimationData] = useState();
  const [scrollAnimationData, setScrollAnimationData] = useState();
  const getExploreData = () => {
    fetch("lottie/explore.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setExploreAnimationData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getScrollData = () => {
    fetch("lottie/scroll.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setScrollAnimationData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getExploreData();
    getScrollData();
  }, []);
  const [stopped, setStopped] = useState(true);
  const [dateAnimationClass, setDateAnimationClass] = useState(style.fadeIn1);
  const [buttonAnimationClass, setButtonAnimationClass] = useState(style.fadeIn2);

  // Explore Lottie
  const defaultOptions1 = {
    loop: true,
    autoplay: false,
    animationData: exploreAnimationData,
  };
  // Scroll Lottie
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: scrollAnimationData,
  };

  // Responsive Lottie size
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const initialExploreLottieSize =
    windowWidth >= 1100 && windowWidth <= 1250 ? 500 : windowWidth < 1100 ? 400 : 600;
  const [exploreLottieSize, setExploreLottieSize] = useState(initialExploreLottieSize);
  const initialScrollLottieSize = windowWidth <= 768 ? 25 : 64;
  const [scrollLottieSize, setScrollLottieSize] = useState(initialScrollLottieSize);
  const getWindowSize = () => {
    setWindowWidth(window.innerWidth);
    const currentSize = windowWidth <= 768 ? 25 : 64;
    setScrollLottieSize(currentSize);
    if (windowWidth >= 1100 && windowWidth <= 1250) {
      setExploreLottieSize(500);
    } else if (windowWidth < 1100) {
      setExploreLottieSize(400);
    } else {
      setExploreLottieSize(600);
    }
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
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    `<span style="color: var(--gdsc-blue-3-100);">G</span><span style="color: #eb4335;">D</span><span style="color: #fbbc12;">S</span><span style="color: #30a953;">C</span> Explore`
                  )
                  .start()
                  .callFunction(() => {
                    setStopped(false);
                    setDateAnimationClass(`${style.fadeIn1} ${style.show1}`);
                    setButtonAnimationClass(`${style.fadeIn2} ${style.show2}`);
                    // setDateTransitionProperties({ marginLeft: "0" });
                  });
              }}
            />
            {/* <span className={style.blue}>G</span>
            <span className={style.red}>D</span>
            <span className={style.yellow}>S</span>
            <span className={style.green}>C</span> Explore */}
          </h1>
          <h2>Explore the Developers from the Northeast</h2>
          <p className={dateAnimationClass}>
            <img src="./images/clock.svg" alt="timer" />
            From 6th April to 8th April
          </p>
          <div className={buttonAnimationClass}>
            <Button type="primary" content="Register" />
            <Button type="secondary" content="Rules and Regulations" />
          </div>
        </div>
        <div className={style.right}>
          <Lottie
            options={defaultOptions1}
            height={exploreLottieSize}
            width={exploreLottieSize}
            isStopped={stopped}
          />
        </div>
        <Lottie
          options={defaultOptions2}
          height={scrollLottieSize}
          width={scrollLottieSize}
          isStopped={stopped}
        />
      </div>
    </section>
  );
};

export default Hero;
