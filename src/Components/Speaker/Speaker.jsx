import SpeakerCard from "../SpeakerCard/SpeakerCard";

import data from "../../Assets/Speakers.json";

import styles from "./Speaker.module.scss";

const Speaker = () => {
  return (
    <section className={styles.speaker}>
      <img className={styles.vector} src="/assets/images/vector.svg" alt="vector" />
      <h1 className={styles["speaker-heading"]}>Speaker</h1>
      <div className={styles["speaker-list"]}>
        {data.map((d) => (
          <SpeakerCard key={d.id} img={d.img} name={d.name} desg={d.desg} />
        ))}
      </div>
    </section>
  );
};

export default Speaker;
