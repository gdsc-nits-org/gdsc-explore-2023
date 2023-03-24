import Lottie from "react-lottie";
import aboutLottie from "./aboutLottie.json";
import style from "./About.module.scss";

const About = () => {
  const options = {
    loop: true,
    autoplay: true,
    animationData: aboutLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={style.container}>
      <Lottie options={options} width={400} />
      <div className={style.about}>
        <div className={style.title}>
          <h1>About Explore</h1>
        </div>
        <p className={style.content}>
          GDSC Explore is the largest developers&#39; fest in the North Eastern India,
          brought to you by GDSC AEC, GDSC NIT Silchar, GDSC IIIT Guwahati, GDSC NIT
          Agartala. It will provide a platform for developers to engage and learn by
          participating in various activities and workshops earning badges and
          certificates along the way. GDSC Explore is the largest developers&#39; fest in
          the North Eastern India, brought to you by GDSC AEC, GDSC NIT Silchar, GDSC IIIT
          Guwahati, GDSC NIT Agartala. It will provide a platform for developers to engage
          and learn by participating in various activities and workshops earning badges
          and certificates along the way.
        </p>
      </div>
    </div>
  );
};

export default About;