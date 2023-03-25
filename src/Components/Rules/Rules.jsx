import style from "./Rules.module.scss";


const Rules = ({ rulesRef }) => {
  const rules = [
    " fklkad Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis ulputate libero et velit interdum, ac aliquet odio mattis ulputate libero et velit interdum, ac aliquet odio mattis.",
    " fklkad Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis ulputate libero et velit interdum, ac aliquet odio mattis ulputate libero et velit interdum, ac aliquet odio mattis.",
    " fklkad Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis ulputate libero et velit interdum, ac aliquet odio mattis ulputate libero et velit interdum, ac aliquet odio mattis.",
    " fklkad Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis ulputate libero et velit interdum, ac aliquet odio mattis ulputate libero et velit interdum, ac aliquet odio mattis.",
    " fklkad Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis ulputate libero et velit interdum, ac aliquet odio mattis ulputate libero et velit interdum, ac aliquet odio mattis.",
    " fklkad Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis ulputate libero et velit interdum, ac aliquet odio mattis ulputate libero et velit interdum, ac aliquet odio mattis.",
    " fklkad Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis ulputate libero et velit interdum, ac aliquet odio mattis ulputate libero et velit interdum, ac aliquet odio mattis.",
    " fklkad Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis ulputate libero et velit interdum, ac aliquet odio mattis ulputate libero et velit interdum, ac aliquet odio mattis.",
    " fklkad Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis ulputate libero et velit interdum, ac aliquet odio mattis ulputate libero et velit interdum, ac aliquet odio mattis.",
    " fklkad Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis ulputate libero et velit interdum, ac aliquet odio mattis ulputate libero et velit interdum, ac aliquet odio mattis.",
  ];
  return (
    <div className={style.container} ref={rulesRef}>
      <div className={style.title}>
        <h1>RULES AND GUIDELINES</h1>
      </div>
      <div className={style.rules}>
        {rules.map((rule, index) => {
          return (
            <div key={index} className={style.rule}>
              {index + 1}.{rule}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Rules;
