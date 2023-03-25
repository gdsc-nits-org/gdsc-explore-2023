import { About, Rules, Speaker, Sponsor } from "../../Components";

import style from "./Home.module.scss";

const Home = () => {
  return (
    <main className={style.home}>
      <About />
      <Rules />
      <Sponsor />
      <Speaker />
    </main>
  );
};

export default Home;
