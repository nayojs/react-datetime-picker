import React from "react";
import { TriggerPropsI } from "./Trigger.types";
import { TriggerDefaultStyles } from "./styles/defaultStyles";

export const Trigger: React.FC<TriggerPropsI> = ({ triggerClasses = {}, theme = "light" }) => {
  const { containerClass = "nayojs-dtp-controller" } = triggerClasses;
  return (
    <>
      <TriggerDefaultStyles theme={theme} />
      <div className={containerClass}>
        <input type="text" value="26 May 2024" readOnly />
        <svg viewBox="0 0 72 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M24 36H16V44H24V36ZM40 36H32V44H40V36ZM56 36H48V44H56V36ZM64 8H60V0H52V8H20V0H12V8H8C3.56 8 0.04 11.6 0.04 16L0 72C0 76.4 3.56 80 8 80H64C68.4 80 72 76.4 72 72V16C72 11.6 68.4 8 64 8ZM64 72H8V28H64V72Z"
            fill="currentColor"
          />
        </svg>
      </div>{" "}
    </>
  );
};
