import { useEffect, useState } from "react";
import Fade from "../Fade/Fade";
import rules from "../../Assets/Rules.json";
import style from "./Rules.module.scss";
import { useMediaQuery } from "../../Hooks";

const Rules = ({ rulesRef }) => {
  const [btn, setBtn] = useState(true);
  const isMobile = useMediaQuery("(max-width: 602px)");
  useEffect(() => {
    setBtn(!isMobile);
  }, [isMobile]);
  return (
    <div className={style.container} ref={rulesRef}>
      <Fade type="bottom">
        <div className={style.title}>
          <h1>RULES AND GUIDELINES</h1>
        </div>
        <div className={style.rules}>
          {rules[0]?.map(({ id, rule }) => {
            return (
              <div key={id} className={style.rule}>
                {id}.{rule}
              </div>
            );
          })}
          {btn
            ? rules[1]?.map(({ id, rule }) => {
                return (
                  <div key={id} className={style.rule}>
                    {id}.{rule}
                  </div>
                );
              })
            : " "}
          <div className={style.btn}>
            {isMobile ? (
              <button onClick={() => setBtn(!btn)}>
                {btn ? "read less" : "read more..."}
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Rules;
