import { DefaultTheme } from "styled-components";

export interface TimePickerProps extends DefaultTheme {
  timePickerClasses?: {
    containerClass?: string;
    triggerClass?: string;
    triggerInputClass?: string;
    triggerIconClass?: string;
    timeClass?: string;
    timeHeaderClass?: string;
    timeTitleClass?: string;
    timeDigitsClass?: string;
    timeListClass?: string;
    timeHoursClass?: string;
    timeMinutesClass?: string;
    timeListItemsClass?: string;
    timeActiveItemClass?: string;
    timeLineClass?: string;
  };
  timePickerStyles?: {
    containerStyles?: React.CSSProperties;
    triggerStyles?: React.CSSProperties;
    triggerInputStyles?: React.CSSProperties;
    triggerIconStyles?: React.CSSProperties;
    timeStyles?: React.CSSProperties;
    timeHeaderStyles?: React.CSSProperties;
    timeTitleStyles?: React.CSSProperties;
    timeDigitsStyles?: React.CSSProperties;
    timeListStyles?: React.CSSProperties;
    timeHoursStyles?: React.CSSProperties;
    timeMinutesStyles?: React.CSSProperties;
    timeListItemActiveStyles?: React.CSSProperties;
    timeListItemsStyles?: React.CSSProperties;
    timeLineStyles?: React.CSSProperties;
  };
  selectTimeHandler?: (time: Date) => void;
  timeListOpen?: boolean;
}
