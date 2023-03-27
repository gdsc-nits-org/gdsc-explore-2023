import { Hero, About, Rules, Registration } from "../../Components";

import style from "./Home.module.scss";

const Home = ({ aboutRef, rulesRef, registerRef }) => {
  return (
    <main className={style.home}>
      <Hero rulesRef={rulesRef} registerRef={registerRef} />
      <About aboutRef={aboutRef} />
      <Registration registerRef={registerRef} />
      <Rules rulesRef={rulesRef} />
    </main>
  );
};

export default Home;
