import React from "react";
import { TimePickerDefaultStyles } from "./defaultStyles";
import { GlobalrDefaultStyles } from "../../styles/globalDefaultStyles";
import { TimePickerProps } from "./timePicker.typs";

export const TimePicker: React.FC<TimePickerProps> = ({
  timePickerClasses = {},
  timePickerStyles = {},
  theme,
}) => {
  const {
    containerClass = "nayojs-dtp-main-cointainer",
    triggerClass = "nayojs-dtp-controller",
    timeClass = "nayojs-time-container",
    timeDigitsClass = "nayojs-time-numbers",
    timeListClass = "nayojs-time-list",
    timeHoursClass = "nayojs-time-hour-list",
    timeMinutesClass = "nayojs-time-minutes-list",
    timeListItems = "nayojs-time-minutes-list-item",
    timeSubmit = "nayojs-time-submit",
    timeSubmitButton = "nayojs-time-submit-button",
  } = timePickerClasses;
  const { containerStyles = {}, triggerStyles = {} } = timePickerStyles;
  return (
    <>
      <GlobalrDefaultStyles theme={theme} />
      <TimePickerDefaultStyles />
      <div className={containerClass} style={containerStyles}>
        <div className={triggerClass} style={triggerStyles}>
          <input type="text" value="12:00" readOnly />
          <svg viewBox="0 0 72 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 36H16V44H24V36ZM40 36H32V44H40V36ZM56 36H48V44H56V36ZM64 8H60V0H52V8H20V0H12V8H8C3.56 8 0.04 11.6 0.04 16L0 72C0 76.4 3.56 80 8 80H64C68.4 80 72 76.4 72 72V16C72 11.6 68.4 8 64 8ZM64 72H8V28H64V72Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className={timeClass}>
          <div className={timeDigitsClass}>
            <ul className={`${timeListClass} ${timeHoursClass}`}>
              {Array.from({ length: 24 }, (_, i) => (i.toString().length < 2 ? `0${i}` : i)).map(
                (hour) => (
                  <li key={hour} className={timeListItems}>
                    {hour}
                  </li>
                )
              )}
            </ul>
            <ul className={`${timeListClass} ${timeMinutesClass}`}>
              {Array.from({ length: 60 }, (_, i) => (i.toString().length < 2 ? `0${i}` : i)).map(
                (minute) => (
                  <li key={minute} className={timeListItems}>
                    {minute}
                  </li>
                )
              )}
            </ul>
          </div>
          <div className={timeSubmit}>
            <button className={timeSubmitButton}>OK</button>
          </div>
        </div>
      </div>
    </>
  );
};
