import { ThemeInterface } from "../types";

export interface CalendarClassesI {
  calendarClasses?: {
    containerClass?: string;
    headerClass?: string;
    headerTitleClass?: string;
    selectButtonClass?: string;
    optionPickerClass?: string;
    optionPickerItemClass?: string;
    optionPickerItemActiveClass: string;
    navigatorsClass?: string;
    navigatorsButtonClass?: string;
    calenderClass?: string;
    daysContainerClass?: string;
    dayNameClass?: string;
    datesContainerClass?: string;
    dateClass?: string;
    activeDateClass?: string;
    selectedDateClass?: string;
  };
}

export interface CalendarStylesI {
  calendarStyles?: {
    containerStyles?: React.CSSProperties;
    headerStyles?: React.CSSProperties;
    headerTitleStyles?: React.CSSProperties;
    selectButtonStyles?: React.CSSProperties;
    optionPickerStyles?: React.CSSProperties;
    optionPickerItemStyles?: React.CSSProperties;
    navigatorsStyles?: React.CSSProperties;
    navigatorsButtonStyles?: React.CSSProperties;
    calenderStyles?: React.CSSProperties;
    daysContainerStyles?: React.CSSProperties;
    dayNameStyles?: React.CSSProperties;
    datesContainerStyles?: React.CSSProperties;
    dateStyles?: React.CSSProperties;
  };
}

export interface CalenderPropsI extends CalendarClassesI, CalendarStylesI, ThemeInterface {
  selectDateHandler?: (date: Date) => void;
  selectYearHandler?: (year: number) => void;
}
