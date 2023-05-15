import { useState } from "react";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import styles from "./SpeakerCard.module.scss";

const SpeakerCard = ({ img, name, desg, socials }) => {
  let socialIcons = [<BsFacebook />, <BsLinkedin />, <BsTwitter />];
  const [tilt, setTilt] = useState({ x: 0, y: 0, dist: 0 });
  const [scale, setScale] = useState(1);

  const filteredSocials = socials.filter((link) => link !== "");
  socialIcons = socialIcons.filter((icon, idx) => socials[idx] !== "");

  const handleMouseEnter = () => {
    setScale(1.07);
  };

  const handleHover = (e) => {
    e.stopPropagation();
    const cardDimension = e.currentTarget.getBoundingClientRect();

    const centerOffsetX = e.clientX - cardDimension.left - cardDimension.width / 2;
    const centerOffsetY = e.clientY - cardDimension.top - cardDimension.height / 2;
    requestAnimationFrame(() => {
      setScale(1.07);
      setTilt({
        x: centerOffsetX,
        y: centerOffsetY,
        dist: Math.sqrt(centerOffsetX ** 2 + centerOffsetY ** 2),
      });
    });
  };

  const handleMouseOut = () => {
    setTilt({ x: 0, y: 0, dist: 0 });
    setScale(1);
  };

  return (
    <div className={styles["card-wrapper"]}>
      <div
        className={styles.card}
        onMouseMove={(e) => handleHover(e)}
        onMouseOut={handleMouseOut}
        onMouseEnter={handleMouseEnter}
        onBlur={handleMouseOut}
        style={{
          transform: ` 
          scale(${scale})
          rotate3d(
            ${tilt.y / 100},
            ${-tilt.x / 100},
            0,
            ${tilt.dist === 0 ? 0 : Math.log(tilt.dist) * 2}deg
          )`,
        }}
      >
        <div className={styles["card-img-wrapper"]}>
          <img className={styles["card-img"]} src={img} alt={name} />
        </div>
        <div className={styles["card-details"]}>
          <span className={styles["card-name"]}>{name}</span>
          <span className={styles["card-desg"]}>{desg}</span>
          <div className={styles["card-socials"]}>
            {filteredSocials.map((socialLink, idx) => (
              <a
                key={idx}
                className={styles["social-icon"]}
                href={socialLink}
                target="_blank"
                rel="noreferrer"
              >
                {socialIcons[idx]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;
