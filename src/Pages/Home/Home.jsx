import { About, Rules, Sponsor } from "../../Components";

import style from "./Home.module.scss";

const Home = () => {
  return (
    <main className={style.home}>
      <About />
      <Rules />
      <Sponsor />
    </main>
  );
};

export default Home;
