import styles from "./SpeakerCard.module.scss";

const SpeakerCard = ({ img, name, desg }) => {
  return (
    <div className={styles.card}>
      <img className={styles["card-img"]} src={img} alt={name} />
      <div className={styles["card-details"]}>
        <span className={styles["card-name"]}>{name}</span>
        <span className={styles["card-desg"]}>{desg}</span>
      </div>
    </div>
  );
};

export default SpeakerCard;
