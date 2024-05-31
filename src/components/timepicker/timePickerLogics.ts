import { isSameHour, isSameMinute, setHours, setMinutes } from "date-fns";
import { useState } from "react";

export const timePickerLogics = () => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<Date>(new Date());
  const [isTimeListOpen, setIsTimeListOpen] = useState<boolean>(false);

  const timeListVisibilityHandler = () => setIsTimeListOpen((prev) => !prev);

  // highlight hours handlers
  const isSelectedHour = (hourDate: Date) => isSameHour(selectedTime, hourDate);

  // highlight minutes handlers
  const isSelectedMinutes = (minutesDate: Date) => {
    return selectedTime.getMinutes() === minutesDate.getMinutes();
  };

  // hours change handler
  const hourChangeHandler = (hourDate: Date) => {
    setSelectedTime(setHours(selectedTime, hourDate.getHours()));
  };

  // minutes change handler
  const minutesChangeHandler = (minuteDate: Date) => {
    setSelectedTime(setMinutes(selectedTime, minuteDate.getMinutes()));
  };

  // const handleTimeSumb

  return {
    isTimeListOpen,
    timeListVisibilityHandler,
    selectedTime,
    isSelectedHour,
    isSelectedMinutes,
    hourChangeHandler,
    minutesChangeHandler,
  };
};
