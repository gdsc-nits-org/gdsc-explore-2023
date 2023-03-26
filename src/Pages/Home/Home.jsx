import { About, Rules, Speaker, Sponsor, Registration } from "../../Components";

import style from "./Home.module.scss";

const Home = () => {
  return (
    <main className={style.home}>
      <About />
      <Registration />
      <Rules />
      <Sponsor />
      <Speaker />
    </main>
  );
};

export default Home;
