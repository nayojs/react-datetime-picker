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

export interface CalenderPropsI extends CalendarClassesI, ThemeInterface {
  selectDateHandler?: (date: Date) => void;
  selectYearHandler?: (year: number) => void;
}
