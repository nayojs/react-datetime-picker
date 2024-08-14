import { DefaultTheme } from "styled-components";
import { CalendarClassesI } from "../calendar/calendar.types";

export interface DatePickerProps extends CalendarClassesI, DefaultTheme {
  datePickerClasses?: { containerClass?: string; triggerClass?: string };
  datePickerStyles?: {
    containerStyles?: React.CSSProperties;
    triggerStyles?: React.CSSProperties;
  };
  dateChangeHandler?: (date: Date) => void;
  selectYearHandler?: (year: number) => void;
}
