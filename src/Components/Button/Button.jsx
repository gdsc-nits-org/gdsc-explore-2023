import style from "./Button.module.scss";

const Button = ({ primary, children, onClick }) => {
  return (
    <button
      className={`${primary ? style.primary : ""} ${style.button} ${style.register}`}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default Button;
