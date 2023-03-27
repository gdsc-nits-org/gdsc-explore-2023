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
            GDSC Explore is the largest developers&#39; fest in the North Eastern India,
            brought to you by GDSC AEC, GDSC NIT Silchar, GDSC IIIT Guwahati, GDSC NIT
            Agartala. It will provide a platform for developers to engage and learn by
            participating in various activities and workshops earning badges and
            certificates along the way. GDSC Explore is the largest developers&#39; fest
            in the North Eastern India, brought to you by GDSC AEC, GDSC NIT Silchar, GDSC
            IIIT Guwahati, GDSC NIT Agartala. It will provide a platform for developers to
            engage and learn by participating in various activities and workshops earning
            badges and certificates along the way.
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
