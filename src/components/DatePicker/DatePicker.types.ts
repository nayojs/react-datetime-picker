import { DefaultTheme } from "styled-components";
import { CalendarClassesI } from "../calendar/calendar.types";

export interface DatePickerProps extends CalendarClassesI, DefaultTheme {
  triggerClasses?: { containerClass?: string };
  dateChangeHandler?: (date: Date) => void;
  selectYearHandler?: (year: number) => void;
}
