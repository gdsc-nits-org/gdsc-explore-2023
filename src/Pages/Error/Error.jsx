import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import { useMediaQuery } from "../../Hooks";

import { Button } from "../../Components";

import style from "./Error.module.scss";

const Error = ({ onLoad }) => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/lotties/error404.json")
      .then((response) => {
        onLoad(false);
        return response.json();
      })
      .then((data) => {
        setAnimationData(data);
      });
  }, [onLoad]);
  const isMobile = useMediaQuery("(max-width: 602px)");

  return (
    <main className={style.error}>
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData,
        }}
        height="60vh"
      />
      <Link to="/">
        <Button primary size={isMobile ? "medium" : "large"}>
          Go to Home
        </Button>
      </Link>
    </main>
  );
};

export default Error;
