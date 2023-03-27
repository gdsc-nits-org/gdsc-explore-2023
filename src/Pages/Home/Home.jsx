import { About, Rules, Hero, GDSCTeam } from "../../Components";

import style from "./Home.module.scss";

const Home = ({ aboutRef, rulesRef, teamRef }) => {
  return (
    <main className={style.home}>
      <Hero rulesRef={rulesRef} />
      <About aboutRef={aboutRef} />
      <Rules rulesRef={rulesRef} />
      <GDSCTeam teamRef={teamRef} />
    </main>
  );
};

export default Home;
