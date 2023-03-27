import styles from "./Registration.module.scss";
import college from "../../Assets/RegisterLinks.json";
import Button from "../Button/Button";
import Fade from "../Fade/Fade";
import { useMediaQuery } from "../../Hooks";

const Registration = ({ registerRef }) => {
  const isMobile = useMediaQuery("(max-width: 602px)");
  return (
    <div className={styles.main} ref={registerRef}>
      <Fade type="bottom">
        <h1 className={styles.heading}>REGISTRATION</h1>
      </Fade>

      <Fade type="bottom">
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
                  <Button primary size={isMobile ? "small" : "medium"}>
                    Register
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
