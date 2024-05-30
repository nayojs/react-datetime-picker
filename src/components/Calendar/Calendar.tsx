import React, { useRef, useState } from "react";
import { CalenderPropsI } from "./Calendar.types";
import { CalendarDefaultStyles } from "./styles/defaultStyles";
import { generateYears } from "../../utils/DateUtils";
import { UseOutsideClick } from "../../hooks/UseOutsideClick";
import { format, isSameDay, isToday } from "date-fns";

export const Calendar: React.FC<CalenderPropsI> = ({
  calendarClasses = {},
  currentMonth,
  calendarDays,
  handleMonthChange,
  datePickHandler,
  selectedDate,
}) => {
  const {
    containerClass = "nayojs-calendar-container",
    headerClass = "nayojs-calendar-header",
    headerTitleClass = "nayojs-calendar-header-title",
    selectButtonClass = "nayojs-calendar-header-button",
    optionPickerClass = "nayojs-calendar-selector-list",
    optionPickerItemClass = "nayojs-calendar-selector-list-item",
    navigatorsClass = "nayojs-calendar-header-navigators",
    navigatorsButtonClass = "nayojs-calendar-navigators-button",
    calenderClass = "nayojs-calendar-days",
    daysContainerClass = "nayojs-calendar-days-header",
    dayNameClass = "nayojs-calendar-day-title",
    datesContainerClass = "nayojs-calendar-days-body",
    dateClass = "nayojs-calendar-day-number",
    activeDateClass = "nayojs-calendar-day-number-active",
    selectedDateClass = "nayojs-calendar-day-number-selected",
  } = calendarClasses;
  const years = generateYears();
  const [isYearListOpen, setIsYearListOpen] = useState<boolean>(false);
  const [selectedYear, setSelectedYear] = useState<number | Date>();
  const calendarRef = useRef<HTMLDivElement>(null);

  const toggleYearSelectList = () => setIsYearListOpen((prev) => !prev);
  const selectYearHandler = (year: number) => {
    setSelectedYear(year);
    setIsYearListOpen(false);
  };

  UseOutsideClick(calendarRef, () => setIsYearListOpen(false));

  const isSelectedDay = (day: Date) => isSameDay(day, selectedDate);
  const isTodayHandler = (day: Date) => isToday(day);

  return (
    <>
      <CalendarDefaultStyles />
      <div className={containerClass} ref={calendarRef}>
        <div className={headerClass}>
          <div className={headerTitleClass}>
            <h3>{currentMonth}</h3>
            <button type="button" className={selectButtonClass} onClick={toggleYearSelectList}>
              <svg viewBox="0 0 56 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M56 0L0 0L28 44L56 0Z" fill="currentColor" />
              </svg>
            </button>
          </div>
          <div className={navigatorsClass}>
            <button
              type="button"
              className={navigatorsButtonClass}
              onClick={() => handleMonthChange("prev")}
            >
              <svg viewBox="0 0 30 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M29.64 42.36L11.32 24L29.64 5.64L24 0L0 24L24 48L29.64 42.36Z"
                  fill="currentColor"
                />
              </svg>
            </button>
            <button className={navigatorsButtonClass} onClick={() => handleMonthChange("next")}>
              <svg viewBox="0 0 30 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0.360352 42.36L18.6804 24L0.360352 5.64L6.00035 0L30.0004 24L6.00035 48L0.360352 42.36Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
        {isYearListOpen && (
          <ul className={optionPickerClass}>
            {years.map((year: number) => (
              <li
                className={optionPickerItemClass}
                key={year}
                onClick={() => selectYearHandler(year)}
              >
                {year}
              </li>
            ))}
          </ul>
        )}
        <div className={calenderClass}>
          <div className={daysContainerClass}>
            {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
              <h3 key={day + Math.random()} className={dayNameClass}>
                {day}
              </h3>
            ))}
          </div>
          <div className={datesContainerClass}>
            {calendarDays.length > 1 &&
              calendarDays.map((day, i) => (
                <button
                  key={day.toString()}
                  className={`${dateClass} ${
                    isSelectedDay(day)
                      ? selectedDateClass
                      : isTodayHandler(day)
                      ? activeDateClass
                      : ""
                  }`}
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
