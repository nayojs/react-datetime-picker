import {
  addDays,
  endOfMonth,
  endOfWeek,
  startOfMonth,
  startOfWeek,
} from "date-fns";
export const generateYears = () => {
  const years = [];
  for (let i = 2100; i >= 1900; i--) {
    years.push(i);
  }
  return years;
};

export const generateCalendarDays = (month: Date) => {
  const start = startOfWeek(startOfMonth(month));
  const end = endOfWeek(endOfMonth(month));
  const days: Date[] = [];
  let day = start;

  while (day <= end) {
    days.push(day);
    day = addDays(day, 1);
  }
  return days;
};
