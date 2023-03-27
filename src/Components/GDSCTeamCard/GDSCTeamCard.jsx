import styles from "./GDSCTeamCard.module.scss";

const GDSCTeamCard = ({ img, name, link }) => {
  return (
    <div className={styles.card}>
      <a className={styles.link} href={link} target="_blank" rel="noreferrer">
        <img className={styles["card-img"]} src={img} alt={name} />
      </a>
    </div>
  );
};

export default GDSCTeamCard;
