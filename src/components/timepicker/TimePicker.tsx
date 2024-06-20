import React from "react";
import { TimePickerDefaultStyles } from "./defaultStyles";
import { TimePickerProps } from "./timePicker.typs";
import { timePickerLogics } from "./timePickerLogics";
import { generateHours, generateMinutes } from "../../utils/time.utils";
import { format } from "date-fns";

export const TimePicker: React.FC<TimePickerProps> = ({
  timePickerClasses = {},
  timePickerStyles = {},
  theme,
  selectTimeHandler = () => {},
}) => {
  const {
    containerClass = "nayojs-dtp-main-cointainer",
    triggerClass = "nayojs-dtp-controller",
    triggerInputClass = "nayojs-dtp-controller-input",
    triggerIconClass = "nayojs-dtp-controller-icon",
    timeClass = "nayojs-time-container",
    timeHeaderClass = "nayojs-time-header",
    timeTitleClass = "nayojs-time-title",
    timeDigitsClass = "nayojs-time-digits",
    timeListClass = "nayojs-time-list",
    timeHoursClass = "nayojs-time-hour-list",
    timeMinutesClass = "nayojs-time-minutes-list",
    timeListItemsClass = "nayojs-time-list-item",
    timeActiveItemClass = "nayojs-time-list-item-active",
    timeLineClass = "nayojs-time-hr",
  } = timePickerClasses;
  const {
    containerStyles = {},
    triggerStyles = {},
    triggerInputStyles = {},
    triggerIconStyles = {},
    timeStyles = {},
    timeHeaderStyles = {},
    timeTitleStyles = {},
    timeDigitsStyles = {},
    timeListStyles = {},
    timeHoursStyles = {},
    timeMinutesStyles = {},
    timeListItemActiveStyles = {},
    timeListItemsStyles = {},
    timeLineStyles = {},
  } = timePickerStyles;
  const {
    isTimeListOpen,
    timeListVisibilityHandler,
    selectedTime,
    isSelectedHour,
    isSelectedMinutes,
    hourChangeHandler,
    minutesChangeHandler,
    selectedHourRef,
    selectedMinutesRef,
    timePickerRef,
    mergeStyles,
  } = timePickerLogics(selectTimeHandler);

  const hours = generateHours();
  const minutes = generateMinutes();

  return (
    <>
      <TimePickerDefaultStyles theme={theme} />
      <div className={containerClass} style={containerStyles} ref={timePickerRef}>
        <div className={triggerClass} style={triggerStyles} onClick={timeListVisibilityHandler}>
          <input
            type="text"
            value={format(selectedTime, "HH:mm a")}
            readOnly
            className={triggerInputClass}
            style={triggerInputStyles}
          />
          <svg
            className={triggerIconClass}
            style={triggerIconStyles}
            viewBox="0 0 96 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1229_455)">
              <path
                d="M47.96 8C25.88 8 8 25.92 8 48C8 70.08 25.88 88 47.96 88C70.08 88 88 70.08 88 48C88 25.92 70.08 8 47.96 8ZM48 80C30.32 80 16 65.68 16 48C16 30.32 30.32 16 48 16C65.68 16 80 30.32 80 48C80 65.68 65.68 80 48 80Z"
                fill="currentColor"
              />
              <path d="M50 28H44V52L65 64.6L68 59.68L50 49V28Z" fill="currentColor" />
            </g>
            <defs>
              <clipPath id="clip0_1229_455">
                <rect width="96" height="96" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        {isTimeListOpen && (
          <div className={timeClass} style={timeStyles}>
            <div className={timeHeaderClass} style={timeHeaderStyles}>
              <h3 className={timeTitleClass} style={timeTitleStyles}>
                Hours
              </h3>
              <h3 className={timeTitleClass} style={timeTitleStyles}>
                Minutes
              </h3>
            </div>
            <div className={timeDigitsClass} style={timeDigitsStyles}>
              <ul
                className={`${timeListClass} ${timeHoursClass}`}
                style={mergeStyles(timeListStyles, timeHoursStyles)}
              >
                {hours.map((hour) => (
                  <li
                    key={hour.toString()}
                    className={`${timeListItemsClass} ${
                      isSelectedHour(hour) ? timeActiveItemClass : ""
                    }`}
                    style={mergeStyles(
                      timeListItemsStyles,
                      isSelectedHour(hour) ? timeListItemActiveStyles : {}
                    )}
                    ref={isSelectedHour(hour) ? selectedHourRef : null}
                    onClick={() => hourChangeHandler(hour)}
                  >
                    {format(hour, "HH")}
                  </li>
                ))}
              </ul>
              <hr className={timeLineClass} style={timeLineStyles} />
              <ul
                className={`${timeListClass} ${timeMinutesClass}`}
                style={mergeStyles(timeListStyles, timeMinutesStyles)}
              >
                {minutes.map((minute) => (
                  <li
                    key={minute.toString()}
                    className={`${timeListItemsClass} ${
                      isSelectedMinutes(minute) ? timeActiveItemClass : ""
                    }`}
                    style={mergeStyles(
                      timeListItemsStyles,
                      isSelectedMinutes(minute) ? timeListItemActiveStyles : {}
                    )}
                    ref={isSelectedMinutes(minute) ? selectedMinutesRef : null}
                    onClick={() => minutesChangeHandler(minute)}
                  >
                    {format(minute, "mm")}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
