import { About, Rules, Hero, Registration, GDSCTeam, Speaker } from "../../Components";

import style from "./Home.module.scss";

const Home = ({ aboutRef, rulesRef, teamRef, registerRef, onLoad }) => {
  return (
    <main className={style.home}>
      <Hero rulesRef={rulesRef} registerRef={registerRef} onLoad={onLoad} />
      <About aboutRef={aboutRef} />
      <Registration registerRef={registerRef} />
      <Speaker />
      <Rules rulesRef={rulesRef} />
      <GDSCTeam teamRef={teamRef} />
    </main>
  );
};

export default Home;
