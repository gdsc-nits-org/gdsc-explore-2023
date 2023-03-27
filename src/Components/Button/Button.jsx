import style from "./Button.module.scss";

const Button = ({ primary, children, onClick, size }) => {
  const primaryClass = primary ? style.primary : "";
  const sizeClass = () => {
    return style[size];
  };

  return (
    <button
      className={`${primaryClass} ${sizeClass()} ${style.button} ${style.register}`}
      onClick={() => {
        if (onClick) onClick();
      }}
    >
      {children}
    </button>
  );
};

export default Button;
