import { Hero, About, Rules, Registration } from "../../Components";

import style from "./Home.module.scss";

const Home = ({ aboutRef, rulesRef }) => {
  return (
    <main className={style.home}>
      <Hero rulesRef={rulesRef} />
      <About aboutRef={aboutRef} />
      <Rules rulesRef={rulesRef} />
      <About />
      <Registration />
      <Rules />
    </main>
  );
};

export default Home;
