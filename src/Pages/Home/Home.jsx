import { About, Rules, Hero, Registration, GDSCTeam } from "../../Components";

import style from "./Home.module.scss";

const Home = ({ aboutRef, rulesRef, teamRef, registerRef, onLoad }) => {
  return (
    <main className={style.home}>
      <Hero rulesRef={rulesRef} registerRef={registerRef} onLoad={onLoad} />
      <About aboutRef={aboutRef} />
      <Registration registerRef={registerRef} />
      <Rules rulesRef={rulesRef} />
      <GDSCTeam teamRef={teamRef} />
    </main>
  );
};

export default Home;
