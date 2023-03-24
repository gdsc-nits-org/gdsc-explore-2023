import Hero from "../../Components/Hero/Hero";

import style from "./Home.module.scss";

const Home = () => {
  return (
    <main className={style.home}>
      <Hero />
    </main>
  );
};

export default Home;
