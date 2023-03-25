import { About, Rules, Registration } from "../../Components";

import style from "./Home.module.scss";

const Home = () => {
  return (
    <main className={style.home}>
      <About />
      <Registration />
      <Rules />
    </main>
  );
};

export default Home;
