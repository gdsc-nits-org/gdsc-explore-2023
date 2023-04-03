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
          GDSC Explore Phase 1 for all NIT Silchar Students is now live through Devfolio!
          Submit your Ideation according to the proper format by 6th April. Selected teams
          from the ideation round will be eligible for the technical round, which will
          start on 7th April. All participants are asked to follow the rules and
          guidelines mentioned here.
        </div>
        <a
          href="https://forms.gle/ptMaxNh3z9d12Ak49"
          target="_blank"
          rel="noreferrer"
          className={style["devfolio-btn"]}
        >
          <Button primary="primary" size="medium">
            Register
          </Button>
        </a>
      </div>
      <Sponsor />
    </div>
  );
};

export default Registration;
