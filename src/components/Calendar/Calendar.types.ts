export interface CalendarClassesI {
  calendarClasses?: {
    containerClass?: string;
    headerClass?: string;
    headerTitleClass?: string;
    selectButtonClass?: string;
    optionPickerClass?: string;
    optionPickerItemClass?: string;
    navigatorsClass?: string;
    navigatorsButtonClass?: string;
    calenderClass?: string;
    daysContainerClass?: string;
    dayNameClass?: string;
    datesContainerClass?: string;
    dateClass?: string;
    activeDateClass?: string;
  };
}

export interface CalenderPropsI extends CalendarClassesI {
  currentMonth: string;
  calendarDays: Date[];
}
