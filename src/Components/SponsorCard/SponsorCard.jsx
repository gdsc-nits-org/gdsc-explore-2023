import styles from "./SponsorCard.module.scss";

const SponsorCard = ({ logo, name }) => {
  return (
    <div className={styles.card}>
      <img className={styles["sponsor-img"]} src={logo} alt={name} />
    </div>
  );
};

export default SponsorCard;
