import GDSCTeamCard from "../GDSCTeamCard/GDSCTeamCard";
import Fade from "../Fade/Fade";
import data from "../../Assets/GDSCTeam.json";

import styles from "./GDSCTeam.module.scss";

const Team = ({ teamRef }) => {
  return (
    <section className={styles.team} ref={teamRef}>
      <Fade type="bottom">
        <h1 className={styles["team-heading"]}>
          GDSC<span className={styles.small}>s</span> Involved
        </h1>
      </Fade>
      <Fade type="bottom">
        <div className={styles["team-list"]}>
          {data.map((d) => (
            <GDSCTeamCard key={d.name} img={d.img} name={d.name} link={d.link} />
          ))}
        </div>
      </Fade>
    </section>
  );
};

export default Team;
