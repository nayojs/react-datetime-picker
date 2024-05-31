import { useEffect, useRef, useState } from "react";
import { addMonths, isSameDay, isToday, setYear, subMonths } from "date-fns";
import { useScrollIntoView } from "../../hooks/useCrollIntoView";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { generateCalendarDays } from "../../utils/date.utils";

export const calendarLogic = (
  selectDateHandler: (date: Date) => void,
  handleYearSelection: (year: number) => void
) => {
  const [calendarDays, setCalendarDays] = useState<Date[]>([]);
  const [isYearListOpen, setIsYearListOpen] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [selectedYear, setSelectedYear] = useState<Date | number>(new Date().getFullYear());
  const calendarRef = useRef<HTMLDivElement>(null);
  const selectedYearRef = useScrollIntoView<HTMLLIElement>(isYearListOpen);

  // functions responsible to handle year selection
  const toggleYearSelectList = () => setIsYearListOpen((prev) => !prev);
  const selectYearHandler = (year: number) => {
    handleYearChange(year);
    setIsYearListOpen(false);
  };

  // global click outside of targeted element handler
  useOutsideClick(calendarRef, () => setIsYearListOpen(false));

  // highlight date handlers
  const isSelectedDay = (day: Date) => isSameDay(day, selectedDate);

  const isTodayHandler = (day: Date) => isToday(day);

  useEffect(() => {
    setCalendarDays(generateCalendarDays(currentMonth));
  }, [currentMonth]);

  const handleMonthChange = (direction: "next" | "prev") => {
    setCurrentMonth(direction === "next" ? addMonths(currentMonth, 1) : subMonths(currentMonth, 1));
  };

  // handle date selection
  const datePickHandler = (date: Date) => {
    setSelectedDate(date);
    setCurrentMonth(date);
    selectDateHandler(date);
  };

  const handleYearChange = (year: number) => {
    const newDate = setYear(selectedDate, year);
    setSelectedDate(newDate);
    setCurrentMonth((prev) => setYear(prev, year));
    setSelectedYear(year);
    selectDateHandler(newDate);
    handleYearSelection(year);
  };

  return {
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
  };
};
