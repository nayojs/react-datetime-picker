import React from "react";
import { DefaultStyles } from "./styles/defaultStyles";
import { Calendar } from "../Calendar/Calendar";
import { DatePickerProps } from "./DatePicker.types";

export const DatePicker: React.FC<DatePickerProps> = ({ calendarClasses, theme = "light" }) => {
  return (
    <>
      <DefaultStyles theme={theme} />
      <Calendar calendarClasses={calendarClasses} />
    </>
  );
};
