import { useRef, useState } from "react";
import { useOutsideClick } from "../../hooks/useOutsideClick";

export const useDatePicker = (
  isCalendarVisible: boolean,
  dateChangeHandler: (date: Date) => void,
  selectYearHandler: (year: number) => void,
) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedYear, setSelectedYear] = useState<Date | number>(
    new Date().getFullYear(),
  );
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(
    isCalendarVisible || false,
  );
  const datePickerElementRef = useRef(null);

  const calendarVisibilityHandler = () => setIsCalendarOpen((prev) => !prev);

  useOutsideClick(datePickerElementRef, () => setIsCalendarOpen(false));

  const selectDateHandler = (date: Date) => {
    setSelectedDate(date);
    if (dateChangeHandler) dateChangeHandler(date);
  };

  const handleYearSelection = (year: number) => {
    setSelectedYear(year);
    if (selectYearHandler) selectYearHandler(year);
  };
  return {
    selectedDate,
    selectedYear,
    isCalendarOpen,
    datePickerElementRef,
    calendarVisibilityHandler,
    selectDateHandler,
    handleYearSelection,
  };
};
