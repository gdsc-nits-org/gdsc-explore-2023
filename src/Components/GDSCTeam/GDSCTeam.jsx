import GDSCTeamCard from "../GDSCTeamCard/GDSCTeamCard";

import data from "../../Assets/GDSCTeam.json";

import styles from "./GDSCTeam.module.scss";

const Team = ({ teamRef }) => {
  return (
    <section className={styles.team} ref={teamRef}>
      <h1 className={styles["team-heading"]}>GDSCs Involved</h1>
      <div className={styles["team-list"]}>
        {data.map((d) => (
          <GDSCTeamCard key={d.name} img={d.img} name={d.name} link={d.link} />
        ))}
      </div>
    </section>
  );
};

export default Team;
