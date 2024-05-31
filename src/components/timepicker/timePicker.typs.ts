import { DefaultTheme } from "styled-components";

export interface TimePickerProps extends DefaultTheme {
  timePickerClasses?: {
    containerClass?: string;
    triggerClass?: string;
    timeClass: string;
    timeDigitsClass: string;
    timeListClass: string;
    timeHoursClass: string;
    timeMinutesClass: string;
    timeListItems: string;
    timeSubmit: string;
    timeSubmitButton: string;
  };
  timePickerStyles?: { containerStyles?: React.CSSProperties; triggerStyles?: React.CSSProperties };
}
