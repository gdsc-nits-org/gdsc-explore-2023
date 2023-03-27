import { useEffect } from "react";
import style from "./Error.module.scss";

const Error = ({ onLoad }) => {
  useEffect(() => {
    onLoad(false);
  });

  return <div className={style.error}>Error</div>;
};

export default Error;
