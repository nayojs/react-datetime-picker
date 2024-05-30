import React, { useEffect, useRef, useState } from "react";
import { Calendar } from "../Calendar/Calendar";
import { DatePickerProps } from "./DatePicker.types";
import { Trigger } from "../Trigger/Trigger";
import { DatePickerDefaultStyles } from "./styles/defaultStyles";
import { generateCalendarDays } from "../../utils/DateUtils";
import { addMonths, format, subMonths } from "date-fns";
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
  }, [currentMonth]);

  const calendarVisibilityHandler = () => setIsCalendarOpen((prev) => !prev);
  UseOutsideClick(datePickerElementRef, () => setIsCalendarOpen(false));

  const handleMonthChange = (direction: "next" | "prev") => {
    setCurrentMonth(direction === "next" ? addMonths(currentMonth, 1) : subMonths(currentMonth, 1));
  };

  const datePickHandler = (date: Date) => {
    setSelectedDate(date);
    setCurrentMonth(date);
    setIsCalendarOpen(false);
  };

  return (
    <>
      <DatePickerDefaultStyles theme={theme} />
      <div className="nayojs-dtp-main-cointainer" ref={datePickerElementRef}>
        <Trigger
          triggerClasses={triggerClasses}
          calendarVisibilityHandler={calendarVisibilityHandler}
          selectedDate={format(selectedDate, "d MMMM yyyy")}
        />
        {isCalendarOpen && (
          <Calendar
            calendarClasses={calendarClasses}
            currentMonth={format(currentMonth, "MMMM yyyy")}
            calendarDays={calendarDays}
            handleMonthChange={handleMonthChange}
            datePickHandler={datePickHandler}
            selectedDate={selectedDate}
          />
        )}
      </div>
    </>
  );
};
