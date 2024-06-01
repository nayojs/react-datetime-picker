import { ThemeInterface } from "../types";

export interface CalendarClassesI {
  calendarClasses?: {
    containerClass?: string;
    headerClass?: string;
    headerTitleClass?: string;
    selectButtonClass?: string;
    selectButtonIconClass?: string;
    optionPickerClass?: string;
    optionPickerItemClass?: string;
    optionPickerItemActiveClass?: string;
    navigatorsClass?: string;
    navigatorsButtonClass?: string;
    navigatorsButtonPrevClass?: string;
    navigatorsButtonNextClass?: string;
    navigatorsButtonPrevIconClass?: string;
    navigatorsButtonNextIconClass?: string;
    activeNavigatorClass?: string;
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
    selectButtonIconStyles?: React.CSSProperties;
    optionPickerStyles?: React.CSSProperties;
    optionPickerItemStyles?: React.CSSProperties;
    optionPickerItemActiveStyles?: React.CSSProperties;
    navigatorsStyles?: React.CSSProperties;
    navigatorsButtonStyles?: React.CSSProperties;
    navigatorsButtonPrevStyles?: React.CSSProperties;
    navigatorsButtonNextStyles?: React.CSSProperties;
    navigatorsButtonPrevIconStyles?: React.CSSProperties;
    navigatorsButtonNextIconStyles?: React.CSSProperties;
    activeNavigatorStyles?: React.CSSProperties;
    calenderStyles?: React.CSSProperties;
    daysContainerStyles?: React.CSSProperties;
    dayNameStyles?: React.CSSProperties;
    datesContainerStyles?: React.CSSProperties;
    dateStyles?: React.CSSProperties;
    selectedDateStyles?: React.CSSProperties;
    activeDateStyles?: React.CSSProperties;
  };
}

export interface CalenderPropsI extends CalendarClassesI, CalendarStylesI, ThemeInterface {
  selectDateHandler?: (date: Date) => void;
  selectYearHandler?: (year: number) => void;
}
