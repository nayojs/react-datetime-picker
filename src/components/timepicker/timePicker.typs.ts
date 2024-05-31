import { DefaultTheme } from "styled-components";

export interface TimePickerProps extends DefaultTheme {
  timePickerClasses?: {
    containerClass?: string;
    triggerClass?: string;
    timeClass: string;
    timeHeaderClass: string;
    timeTitleClass: string;
    timeDigitsClass: string;
    timeListClass: string;
    timeHoursClass: string;
    timeMinutesClass: string;
    timeListItemsClass: string;
    timeActiveItemClass: string;
    timeLineClass: string;
  };
  timePickerStyles?: {
    containerStyles?: React.CSSProperties;
    triggerStyles?: React.CSSProperties;
    timeStyles: React.CSSProperties;
    timeHeaderStyles: React.CSSProperties;
    timeTitleStyles: React.CSSProperties;
    timeDigitsStyles: React.CSSProperties;
    timeHoursStyles: React.CSSProperties;
    timeMinutesStyles: React.CSSProperties;
    timeListItemsStyles: React.CSSProperties;
    timeLineStyles: React.CSSProperties;
  };
  selectTimeHandler?: (time: Date) => void;
}
