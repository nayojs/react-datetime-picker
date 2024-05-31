import React from "react";
import { TimePickerDefaultStyles } from "./defaultStyles";
import { GlobalrDefaultStyles } from "../../styles/globalDefaultStyles";
import { TimePickerProps } from "./timePicker.typs";
import { timePickerLogics } from "./timePickerLogics";
import { generateHours, generateMinutes } from "../../utils/time.utils";
import { format } from "date-fns";

export const TimePicker: React.FC<TimePickerProps> = ({
  timePickerClasses = {},
  timePickerStyles = {},
  theme,
}) => {
  const {
    containerClass = "nayojs-dtp-main-cointainer",
    triggerClass = "nayojs-dtp-controller",
    timeClass = "nayojs-time-container",
    timeListClass = "nayojs-time-list",
    timeHoursClass = "nayojs-time-hour-list",
    timeMinutesClass = "nayojs-time-minutes-list",
    timeListItemsClass = "nayojs-time-list-item",
    timeActiveItemClass = "nayojs-time-list-item-active",
    timeLineClass = "nayojs-time-hr",
  } = timePickerClasses;
  const { containerStyles = {}, triggerStyles = {} } = timePickerStyles;
  const {
    isTimeListOpen,
    timeListVisibilityHandler,
    selectedTime,
    isSelectedHour,
    isSelectedMinutes,
    hourChangeHandler,
    minutesChangeHandler,
  } = timePickerLogics();
  const hours = generateHours();
  const minutes = generateMinutes();
  return (
    <>
      <GlobalrDefaultStyles theme={theme} />
      <TimePickerDefaultStyles />
      <div className={containerClass} style={containerStyles}>
        <div className={triggerClass} style={triggerStyles} onClick={timeListVisibilityHandler}>
          <input type="text" value={format(selectedTime, "HH:mm a")} readOnly />
          <svg viewBox="0 0 72 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 36H16V44H24V36ZM40 36H32V44H40V36ZM56 36H48V44H56V36ZM64 8H60V0H52V8H20V0H12V8H8C3.56 8 0.04 11.6 0.04 16L0 72C0 76.4 3.56 80 8 80H64C68.4 80 72 76.4 72 72V16C72 11.6 68.4 8 64 8ZM64 72H8V28H64V72Z"
              fill="currentColor"
            />
          </svg>
        </div>
        {isTimeListOpen && (
          <div className={timeClass}>
            <ul className={`${timeListClass} ${timeHoursClass}`}>
              {hours.map((hour) => (
                <li
                  key={hour.toString()}
                  className={`${timeListItemsClass} ${
                    isSelectedHour(hour) ? timeActiveItemClass : ""
                  }`}
                  onClick={() => hourChangeHandler(hour)}
                >
                  {format(hour, "HH")}
                </li>
              ))}
            </ul>
            <hr className={timeLineClass} />
            <ul className={`${timeListClass} ${timeMinutesClass}`}>
              {minutes.map((minute) => (
                <li
                  key={minute.toString()}
                  className={`${timeListItemsClass} ${
                    isSelectedMinutes(minute) ? timeActiveItemClass : ""
                  }`}
                  onClick={() => minutesChangeHandler(minute)}
                >
                  {format(minute, "mm")}
                  <>{console.log(format(minute, "mm"), "hour------", isSelectedMinutes(minute))}</>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
