import {
  About,
  Rules,
  Hero,
  Registration,
  GDSCTeam,
  Speaker,
  Sponsor,
} from "../../Components";

import style from "./Home.module.scss";

import Associations from "../../Assets/Association.json";

const Home = ({ aboutRef, rulesRef, teamRef, registerRef, onLoad }) => {
  return (
    <main className={style.home}>
      <Hero rulesRef={rulesRef} registerRef={registerRef} onLoad={onLoad} />
      <About aboutRef={aboutRef} />
      <Sponsor title="In Association With" data={Associations} />
      <Speaker />
      <Registration registerRef={registerRef} />
      <Rules rulesRef={rulesRef} />
      <GDSCTeam teamRef={teamRef} />
    </main>
  );
};

export default Home;
