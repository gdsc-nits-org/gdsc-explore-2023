import Hero from "../../Components/Hero/Hero";
import { About, Rules } from "../../Components";

import style from "./Home.module.scss";

const Home = () => {
  return (
    <main className={style.home}>
      <Hero />
      <About />
      <Rules />
    </main>
  );
};

export default Home;
