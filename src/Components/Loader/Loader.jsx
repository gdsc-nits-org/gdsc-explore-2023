import styles from "./Loader.module.scss";
import preloader from "../../Assets/preloader.gif";

const Loader = () => {
  return (
    <main className={styles.loader}>
      <img src={preloader} alt="loader" />
    </main>
  );
};

export default Loader;
