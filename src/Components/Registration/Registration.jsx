import styles from "./Registration.module.scss";
import college from "../../data/registerLinks.json";
const Registration = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.heading}>REGISTRATIONS</h1>

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
              {/* <button className={styles.registerBtn}> <a href={item.link}>REGISTER HERE</a></button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Registration;
