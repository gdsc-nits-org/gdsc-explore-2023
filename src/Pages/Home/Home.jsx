import { About, Rules } from "../../Components";

import style from "./Home.module.scss";

const Home = () => {
  return (
    <main className={style.home}>
      <About />
      <Rules />
    </main>
  );
};

export default Home;