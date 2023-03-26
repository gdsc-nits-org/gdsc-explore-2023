import style from "./Button.module.scss";

const Button = ({ type, children, rulesRef }) => {
  return type === "primary" ? (
    <button className={`${style.button} ${style.register}`}>{children}</button>
  ) : (
    <button
      className={`${style.button} ${style.rules}`}
      onClick={() =>
        rulesRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    >
      {children}
    </button>
  );
};

export default Button;
