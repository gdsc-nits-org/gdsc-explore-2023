import SponsorCard from "../SponsorCard/SponsorCard";

import data from "../../Assets/Sponsors.json";

import styles from "./Sponsor.module.scss";

const Sponsor = () => {
  return (
    <section className={styles.sponsor}>
      <h1 className={styles["sponsor-heading"]}>Sponsor</h1>
      <div className={styles["sponsor-list"]}>
        {data.map((d) => (
          <SponsorCard key={d.id} logo={d.logo} name={d.name} />
        ))}
      </div>
    </section>
  );
};

export default Sponsor;
