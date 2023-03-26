import style from "./Rules.module.scss";
import rules from "../../Assets/Rules.json";

const Rules = ({ rulesRef }) => {
  return (
    <div className={style.container} ref={rulesRef}>
      <div className={style.title}>
        <h1>RULES AND GUIDELINES</h1>
      </div>
      <div className={style.rules}>
        {rules.map(({ id, rule }) => {
          return (
            <div key={id} className={style.rule}>
              {id}.{rule}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Rules;
