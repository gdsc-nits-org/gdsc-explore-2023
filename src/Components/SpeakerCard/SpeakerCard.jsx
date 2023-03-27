import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import styles from "./SpeakerCard.module.scss";

const SpeakerCard = ({ img, name, desg, socials }) => {
  const socialIcons = [<BsFacebook />, <BsLinkedin />, <BsTwitter />];
  return (
    <div className={styles.card}>
      <img className={styles["card-img"]} src={img} alt={name} />
      <div className={styles["card-details"]}>
        <span className={styles["card-name"]}>{name}</span>
        <span className={styles["card-desg"]}>{desg}</span>
        <div className={styles["card-socials"]}>
          {socials.map((socialLink, idx) => (
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
  );
};

export default SpeakerCard;
