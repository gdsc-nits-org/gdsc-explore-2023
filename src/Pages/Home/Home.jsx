import { About, Rules, Speaker, Sponsor, Hero } from "../../Components";

import style from "./Home.module.scss";

const Home = ({ aboutRef, rulesRef }) => {
  return (
    <main className={style.home}>
      <Hero rulesRef={rulesRef} />
      <About aboutRef={aboutRef} />
      <Rules rulesRef={rulesRef} />
      <Sponsor />
      <Speaker />
    </main>
  );
};

export default Home;
