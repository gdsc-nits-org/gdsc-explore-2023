import { Fragment } from "react";
import SponsorCard from "../SponsorCard/SponsorCard";

import styles from "./Sponsor.module.scss";

const Sponsor = ({ title, data }) => {
  return (
    <section className={styles.sponsor}>
      <h1 className={styles["sponsor-heading"]}>{title || "Sponsors"}</h1>
      {data.map((tier, idx) => (
        <Fragment key={idx}>
          <div className={styles["sponsor-list"]}>
            {tier.map((d) => (
              <SponsorCard key={d.id} logo={d.logo} name={d.name} />
            ))}
          </div>
          {idx !== data.length - 1 && (
            <div key={idx} className={styles["tier-break"]}></div>
          )}
        </Fragment>
      ))}
    </section>
  );
};

export default Sponsor;
