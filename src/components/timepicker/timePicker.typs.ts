import { DefaultTheme } from "styled-components";

export interface TimePickerProps extends DefaultTheme {
  timePickerClasses?: {
    containerClass?: string;
    triggerClass?: string;
    timeClass: string;
    timeListClass: string;
    timeHoursClass: string;
    timeMinutesClass: string;
    timeListItemsClass: string;
    timeActiveItemClass: string;
    timeLineClass: string;
  };
  timePickerStyles?: { containerStyles?: React.CSSProperties; triggerStyles?: React.CSSProperties };
}
