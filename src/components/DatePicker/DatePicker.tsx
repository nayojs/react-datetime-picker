import React, { useEffect, useRef, useState } from "react";
import { Calendar } from "../Calendar/Calendar";
import { DatePickerProps } from "./DatePicker.types";
import { Trigger } from "../Trigger/Trigger";
import { DatePickerDefaultStyles } from "./styles/defaultStyles";
import { generateCalendarDays } from "../../utils/DateUtils";
import { format } from "date-fns";
import { UseOutsideClick } from "../../hooks/UseOutsideClick";

export const DatePicker: React.FC<DatePickerProps> = ({
  calendarClasses,
  theme,
  triggerClasses,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [calendarDays, setCalendarDays] = useState<Date[]>([]);
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);
  const datePickerElementRef = useRef(null);

  useEffect(() => {
    setCalendarDays(generateCalendarDays(currentMonth));
  }, []);

  const calendarVisibilityHandler = () => setIsCalendarOpen((prev) => !prev);
  UseOutsideClick(datePickerElementRef, () => setIsCalendarOpen(false));

  return (
    <>
      <DatePickerDefaultStyles theme={theme} />
      <div className="nayojs-dtp-main-cointainer" ref={datePickerElementRef}>
        <Trigger
          triggerClasses={triggerClasses}
          calendarVisibilityHandler={calendarVisibilityHandler}
        />
        {isCalendarOpen && (
          <Calendar
            calendarClasses={calendarClasses}
            currentMonth={format(currentMonth, "MMMM yyyy")}
            calendarDays={calendarDays}
          />
        )}
      </div>
    </>
  );
};
