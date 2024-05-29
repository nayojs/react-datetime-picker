import React from "react";
import { Calendar } from "../Calendar/Calendar";
import { DatePickerProps } from "./DatePicker.types";
import { Trigger } from "../Trigger/Trigger";
import { DatePickerDefaultStyles } from "./styles/defaultStyles";

export const DatePicker: React.FC<DatePickerProps> = ({
  calendarClasses,
  theme,
  triggerClasses,
}) => {
  return (
    <>
      <DatePickerDefaultStyles theme={theme} />
      <div className="nayojs-dtp-main-cointainer">
        <Trigger triggerClasses={triggerClasses} theme={theme} />
        <Calendar calendarClasses={calendarClasses} theme={theme} />
      </div>
    </>
  );
};
