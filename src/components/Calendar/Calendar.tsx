import React from "react";
import { CalenderPropsI } from "./calendar.types";
import { CalendarDefaultStyles } from "./styles/defaultStyles";
import { generateYears } from "../../utils/date.utils";
import { format } from "date-fns";
import { useCalendar } from "./useCalendar";

export const Calendar: React.FC<CalenderPropsI> = ({
  calendarClasses = {},
  calendarStyles = {},
  selectDateHandler = () => {},
  selectYearHandler: handleYearSelection = () => {},
  theme = "light",
}) => {
  const {
    containerClass = "nayojs-calendar-container",
    headerClass = "nayojs-calendar-header",
    headerTitleClass = "nayojs-calendar-header-title",
    headerTitleTextClass = "nayojs-calendar-header-title-text",
    selectButtonClass = "nayojs-calendar-header-button",
    selectButtonIconClass = "nayojs-calendar-header-button-icon",
    optionPickerClass = "nayojs-calendar-selector-list",
    optionPickerItemClass = "nayojs-calendar-selector-list-item",
    optionPickerItemActiveClass = "nayojs-calendar-selector-list-item-active",
    navigatorsClass = "nayojs-calendar-header-navigators",
    navigatorsButtonClass = "nayojs-calendar-navigators-button",
    navigatorsButtonPrevClass = "nayojs-calendar-navigators-button-prev",
    navigatorsButtonNextClass = "nayojs-calendar-navigators-button-next",
    navigatorsButtonPrevIconClass = "nayojs-calendar-navigators-button-prev-icon",
    navigatorsButtonNextIconClass = "nayojs-calendar-navigators-button-next-icon",
    calenderClass = "nayojs-calendar-days",
    daysContainerClass = "nayojs-calendar-days-header",
    dayNameClass = "nayojs-calendar-day-title",
    datesContainerClass = "nayojs-calendar-days-body",
    dateClass = "nayojs-calendar-day-number",
    activeDateClass = "nayojs-calendar-day-number-active",
    selectedDateClass = "nayojs-calendar-day-number-selected",
  } = calendarClasses;
  const {
    containerStyles = {},
    headerStyles = {},
    headerTitleStyles = {},
    headerTitleTextStyles = {},
    selectButtonStyles = {},
    selectButtonIconStyles = {},
    optionPickerStyles = {},
    optionPickerItemStyles = {},
    optionPickerItemActiveStyles = {},
    navigatorsStyles = {},
    navigatorsButtonStyles = {},
    navigatorsButtonPrevStyles = {},
    navigatorsButtonNextStyles = {},
    activeNavigatorStyles = {},
    navigatorsButtonPrevIconStyles = {},
    navigatorsButtonNextIconStyles = {},
    calenderStyles = {},
    daysContainerStyles = {},
    dayNameStyles = {},
    datesContainerStyles = {},
    dateStyles = {},
    selectedDateStyles = {},
    activeDateStyles = {},
  } = calendarStyles;

  const {
    isYearListOpen,
    toggleYearSelectList,
    selectYearHandler,
    isSelectedDay,
    isTodayHandler,
    selectedYearRef,
    calendarRef,
    calendarDays,
    handleMonthChange,
    currentMonth,
    selectedYear,
    datePickHandler,
    mergeStyles,
    activeNavigator,
  } = useCalendar(selectDateHandler, handleYearSelection);
  const years = generateYears();
  const weekNames = ["S", "M", "T", "W", "T", "F", "S"];

  return (
    <>
      <CalendarDefaultStyles theme={theme} />
      <div className={containerClass} style={containerStyles} ref={calendarRef}>
        <div className={headerClass} style={headerStyles}>
          <div className={headerTitleClass} style={headerTitleStyles}>
            <h3 className={headerTitleTextClass} style={headerTitleTextStyles}>
              {format(currentMonth, "MMMM yyyy")}
            </h3>
            <button
              type="button"
              className={selectButtonClass}
              style={selectButtonStyles}
              onClick={toggleYearSelectList}
            >
              <svg
                className={selectButtonIconClass}
                style={selectButtonIconStyles}
                viewBox="0 0 56 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M56 0L0 0L28 44L56 0Z" fill="currentColor" />
              </svg>
            </button>
          </div>
          <div className={navigatorsClass} style={navigatorsStyles}>
            <button
              type="button"
              className={`${navigatorsButtonClass} ${navigatorsButtonPrevClass}`}
              style={mergeStyles(
                mergeStyles(navigatorsButtonStyles, navigatorsButtonPrevStyles),
                activeNavigator === "prev" ? activeNavigatorStyles : {},
              )}
              onClick={() => handleMonthChange("prev")}
            >
              <svg
                className={navigatorsButtonPrevIconClass}
                style={navigatorsButtonPrevIconStyles}
                viewBox="0 0 30 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.64 42.36L11.32 24L29.64 5.64L24 0L0 24L24 48L29.64 42.36Z"
                  fill="currentColor"
                />
              </svg>
            </button>
            <button
              className={`${navigatorsButtonClass} ${navigatorsButtonNextClass}`}
              style={mergeStyles(
                mergeStyles(navigatorsButtonStyles, navigatorsButtonNextStyles),
                activeNavigator === "next" ? activeNavigatorStyles : {},
              )}
              onClick={() => handleMonthChange("next")}
            >
              <svg
                className={navigatorsButtonNextIconClass}
                style={navigatorsButtonNextIconStyles}
                viewBox="0 0 30 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.360352 42.36L18.6804 24L0.360352 5.64L6.00035 0L30.0004 24L6.00035 48L0.360352 42.36Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
        {isYearListOpen && (
          <ul className={optionPickerClass} style={optionPickerStyles}>
            {years.map((year: number) => (
              <li
                key={year}
                className={`${optionPickerItemClass} ${
                  selectedYear === year ? optionPickerItemActiveClass : ""
                }`}
                style={mergeStyles(
                  optionPickerItemStyles,
                  selectedYear === year ? optionPickerItemActiveStyles : {},
                )}
                ref={selectedYear === year ? selectedYearRef : null}
                onClick={() => selectYearHandler(year)}
              >
                {year}
              </li>
            ))}
          </ul>
        )}
        <div className={calenderClass} style={calenderStyles}>
          <div className={daysContainerClass} style={daysContainerStyles}>
            {weekNames.map((day) => (
              <h3
                key={day + Math.random()}
                className={dayNameClass}
                style={dayNameStyles}
              >
                {day}
              </h3>
            ))}
          </div>
          <div className={datesContainerClass} style={datesContainerStyles}>
            {calendarDays.length > 1 &&
              calendarDays.map((day) => (
                <button
                  key={day.toString()}
                  className={`${dateClass} ${
                    isSelectedDay(day)
                      ? selectedDateClass
                      : isTodayHandler(day)
                        ? activeDateClass
                        : ""
                  }`}
                  style={mergeStyles(
                    dateStyles,
                    isSelectedDay(day)
                      ? selectedDateStyles
                      : isTodayHandler(day)
                        ? activeDateStyles
                        : {},
                  )}
                  onClick={() => datePickHandler(day)}
                >
                  {format(day, "d")}
                </button>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
