import styles from "./Registration.module.scss";
import college from "../../Assets/RegisterLinks.json";
import Button from "../Button/Button";
import Fade from "../Fade/Fade";

const Registration = ({ registerRef }) => {
  return (
    <div className={styles.main} ref={registerRef}>
      <Fade type="bottom">
        <h1 className={styles.heading}>REGISTRATION</h1>
      </Fade>

      <Fade type="bottom">
        <div className={styles.box}>
          {college.map((item) => (
            <div key={item.id} className={styles.card}>
              <img className={styles.cover} src={item.cover} alt="college" />
              <div className={styles.tint}></div>
              <div className={styles.rg}>
                <p>{item.heading}</p>
                <a href={item.link} target="_blank">
                  <Button primary size="small" disabled>
                    {item.link === "#" ? "Closed" : "Closed"}
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </Fade>
    </div>
  );
};

export default Registration;
