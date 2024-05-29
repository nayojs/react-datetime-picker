import React from "react";
import { CalenderPropsI } from "./Calendar.types";
import { CalendarDefaultStyles } from "./styles/defaultStyles";

export const Calendar: React.FC<CalenderPropsI> = ({ calendarClasses = {}, theme = "light" }) => {
  const {
    containerClass = "nayojs-calendar-container",
    headerClass = "nayojs-calendar-header",
    headerTitleClass = "nayojs-calendar-header-title",
    selectButtonClass = "nayojs-calendar-header-button",
    navigatorsClass = "nayojs-calendar-header-navigators",
    navigatorsButtonClass = "nayojs-calendar-navigators-button",
    calenderClass = "nayojs-calendar-days",
    daysContainerClass = "nayojs-calendar-days-header",
    dayNameClass = "nayojs-calendar-day-title",
    datesContainerClass = "nayojs-calendar-days-body",
    dateClass = "nayojs-calendar-day-number",
    activeDateClass = "nayojs-calendar-day-number-active",
  } = calendarClasses;
  return (
    <>
      <CalendarDefaultStyles theme={theme} />
      <div className={containerClass}>
        <div className={headerClass}>
          <div className={headerTitleClass}>
            <h3>May 2024</h3>
            <button className={selectButtonClass}>
              <svg viewBox="0 0 56 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M56 0L0 0L28 44L56 0Z" fill="currentColor" />
              </svg>
            </button>
          </div>
          <div className={navigatorsClass}>
            <button type="button" className={navigatorsButtonClass}>
              <svg viewBox="0 0 30 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M29.64 42.36L11.32 24L29.64 5.64L24 0L0 24L24 48L29.64 42.36Z"
                  fill="currentColor"
                />
              </svg>
            </button>
            <button className={navigatorsButtonClass}>
              <svg viewBox="0 0 30 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0.360352 42.36L18.6804 24L0.360352 5.64L6.00035 0L30.0004 24L6.00035 48L0.360352 42.36Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className={calenderClass}>
          <div className={daysContainerClass}>
            {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
              <h3 key={day} className={dayNameClass}>
                {day}
              </h3>
            ))}
          </div>
          <div className={datesContainerClass}>
            {[...Array(31)].map((_, i) => (
              <button key={i} className={`${dateClass} ${i === 11 ? activeDateClass : ""}`}>
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
