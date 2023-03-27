import { useEffect, useRef, useState } from "react";
import style from "./Fade.module.scss";

const Fade = ({ type, children }) => {
  const divRef = useRef(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const ref = divRef.current;
    const observer = new IntersectionObserver(
      (entry) => {
        if (entry[0].isIntersecting) {
          setShow(true);
          observer.unobserve(ref);
        }
      },
      {
        root: null,
        threshold: 0.25,
      }
    );
    observer.observe(ref);
    return () => observer.unobserve(ref);
  }, []);

  return (
    <div
      ref={divRef}
      className={`${show ? `${style[type]} ${style.show}` : style[type]}`}
    >
      {children}
    </div>
  );
};

export default Fade;
