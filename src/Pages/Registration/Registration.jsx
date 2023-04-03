import { useLayoutEffect } from "react";
import style from "./Registration.module.scss";
import { Button, Sponsor } from "../../Components";

const Registration = ({ onLoad }) => {
  useLayoutEffect(() => {
    onLoad(false);
  }, [onLoad]);

  return (
    <div className={style["nits-reg-page"]}>
      <div className={style["nits-reg"]}>
        <div className={style.heading}>NIT SILCHAR PHASE 1 REGISTRATION</div>
        <div className={style.about}>
          GDSC Explore Phase 1 for all NIT Silchar Students is now live! Submit your
          Ideation according to the{" "}
          <a
            href="https://docs.google.com/document/d/1qwLDoE2fbb_wES1wn3ZUO1kJaVcKfpK6XVJhUSMG8tQ/edit?usp=sharing"
            target="_blank"
          >
            proper format
          </a>{" "}
          by 6th April. Selected teams from the ideation round will be eligible for the
          technical round, which will start on 7th April. All participants are asked to
          follow the rules and guidelines mentioned{" "}
          <a
            href="https://docs.google.com/document/d/13PuDOEJ9kOeYFVgQge4vqfaZmhosXEEb3DccmIgkJu4/edit"
            target="_blank"
          >
            here
          </a>
          .
          <br /> <br />
          Want to know more about Explore?{" "}
          <a href="https://gdsc.community.dev/j/nvbwt2fs98fny/" target="_blank">
            RSVP for our Info Session
          </a>{" "}
          on 6th April.
        </div>
        <a
          href="https://forms.gle/ptMaxNh3z9d12Ak49"
          target="_blank"
          rel="noreferrer"
          className={style["devfolio-btn"]}
        >
          <Button primary="primary" size="large">
            Register
          </Button>
        </a>
        <div className={style["devfolio-btn"]}>
          <div
            className="apply-button"
            data-hackathon-slug="gdsc-explore-23-phase-1"
            data-button-theme="light"
            style={{}}
          ></div>
        </div>
      </div>
      <Sponsor />
    </div>
  );
};

export default Registration;
