import Hero from "../../Components/Hero/Hero";
import { About, Rules } from "../../Components";

import style from "./Home.module.scss";

const Home = ({ aboutRef, rulesRef }) => {
  return (
    <main className={style.home}>
      <Hero rulesRef={rulesRef} />
      <About aboutRef={aboutRef} />
      <Rules rulesRef={rulesRef} />
    </main>
  );
};

export default Home;
