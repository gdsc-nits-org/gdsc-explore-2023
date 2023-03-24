import style from "./Button.module.scss";

const Button = (props) => {
  return props.type === "primary" ? (
    <button className={`${style.button} ${style.register}`}>{props.content}</button>
  ) : (
    <button className={`${style.button} ${style.rules}`}>{props.content}</button>
  );
};

export default Button;
