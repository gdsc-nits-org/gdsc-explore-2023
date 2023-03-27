import { useState, useEffect } from "react";
import Lottie from "react-lottie";
import style from "./About.module.scss";
import Fade from "../Fade/Fade";

const About = ({ aboutRef }) => {
  const [aboutLottie, setAboutLottie] = useState("");
  useEffect(() => {
    fetch("/lotties/aboutLottie.json")
      .then((response) => response.json())
      .then((data) => {
        setAboutLottie(data);
      })
      .catch(() => {
        setAboutLottie(null);
      });
  }, []);
  const options = {
    loop: true,
    autoplay: true,
    animationData: aboutLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={style.container} ref={aboutRef}>
      <Fade type="left">
        <div className={style.lottie}>
          {aboutLottie ? (
            <Lottie options={options} width={400} />
          ) : (
            <img src="#" alt="img" />
          )}
        </div>
      </Fade>
      <div className={style.about}>
        <div className={style.title}>
          <Fade type="left">
            <h1>ABOUT EXPLORE</h1>
          </Fade>
        </div>
        <Fade type="right">
          <p className={style.content}>
            GDSC Explore was created in 2021 by multiple NorthEastern GDSCs in order to
            give new and ambitious developers the chance to show off their skills in the
            intensely competitive and exciting industry of development. Explore gives tech
            enthusiasts from various backgrounds a place to connect and learn about one
            another&apos;s perspectives on technology. Explore&apos;s intent has always
            been to establish a setting in which various seminars, speaker sessions, and
            tech presentations could emphasise the development culture of NorthEastern
            India.
          </p>
        </Fade>
      </div>
      <div className={style.vector}>
        <Fade type="bottom">
          <img src="/assets/images/vector.svg" alt="png" />
        </Fade>
        <Fade type="bottom">
          <img className={style.vector2} src="/assets/images/vector.svg" alt="png" />
        </Fade>
      </div>
    </div>
  );
};

export default About;
