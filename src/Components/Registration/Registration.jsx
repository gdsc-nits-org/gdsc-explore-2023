import styles from "./Registration.module.scss";
import college from "../../data/registerLinks.json";
import Button from "../Button/Button";

const Registration = ({ registerRef }) => {
  return (
    <div className={styles.main} ref={registerRef}>
      <h1 className={styles.heading}>REGISTRATION</h1>

      <div className={styles.box}>
        {college.map((item) => (
          <div
            style={{ backgroundImage: `url(${item.cover})` }}
            key={item.id}
            className={styles.card}
          >
            <div className={styles.tint}></div>
            <div className={styles.rg}>
              <p>{item.heading}</p>
              <a href="https://www.google.com/" target="_blank">
                <Button primary size="small">
                  Register
                </Button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Registration;
