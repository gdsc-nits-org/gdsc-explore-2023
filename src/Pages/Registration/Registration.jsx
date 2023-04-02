import { useLayoutEffect, useEffect } from "react";
import style from "./Registration.module.scss";
import { Sponsor } from "../../Components";

const Registration = ({ onLoad }) => {
  useLayoutEffect(() => {
    onLoad(false);
  }, [onLoad]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
