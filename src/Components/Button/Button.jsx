import style from "./Button.module.scss";

const Button = ({ type, content }) => {
  if (type === "register") {
    return <button className={`${style.button} ${style.register}`}>{content}</button>;
  }
  if (type === "rules") {
    return <button className={`${style.button} ${style.rules}`}>{content}</button>;
  }
  return (
    <button type={type} className={`${style.btn} ${style["btn-large"]}`}>
      Button
    </button>
  );
};

export default Button;
