import { useState, useEffect } from "react";
import Lottie from "react-lottie";
import style from "./About.module.scss";

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
      <div className={style.lottie}>
        {aboutLottie ? (
          <Lottie options={options} width={400} />
        ) : (
          <img src="#" alt="img" />
        )}
      </div>
      <div className={style.about}>
        <div className={style.title}>
          <h1>ABOUT EXPLORE</h1>
        </div>
        <p className={style.content}>
          GDSC Explore was created in 2021 by multiple NorthEastern GDSCs in order to give
          new and ambitious developers the chance to show off their skills in the
          intensely competitive and exciting industry of development. Explore gives tech
          enthusiasts from various backgrounds a place to connect and learn about one
          another&apos;s perspectives on technology. Explore&apos;s intent has always been
          to establish a setting in which various seminars, speaker sessions, and tech
          presentations could emphasise the development culture of NorthEastern India.
        </p>
      </div>
      <div className={style.vector}>
        <img src="/assets/images/vector.svg" alt="png" />
        <img src="/assets/images/vector.svg" alt="png" />
      </div>
    </div>
  );
};

export default About;
