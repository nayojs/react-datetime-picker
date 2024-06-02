import { setHours, setMinutes } from "date-fns";
import { useRef, useState } from "react";
import { useScrollIntoView } from "../../hooks/useCrollIntoView";
import { useOutsideClick } from "../../hooks/useOutsideClick";

export const timePickerLogics = (selectTimeHandler: (time: Date) => void) => {
  const [selectedTime, setSelectedTime] = useState<Date>(new Date());
  const [isTimeListOpen, setIsTimeListOpen] = useState<boolean>(false);
  const selectedHourRef = useScrollIntoView<HTMLLIElement>(isTimeListOpen);
  const selectedMinutesRef = useScrollIntoView<HTMLLIElement>(isTimeListOpen);
  const timePickerRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = () => setIsTimeListOpen(false);

  useOutsideClick(timePickerRef, handleOutsideClick);

  const timeListVisibilityHandler = () => {
    setIsTimeListOpen((prev) => !prev);
  };

  // highlight hours handlers
  const isSelectedHour = (hourDate: Date) => {
    return selectedTime.getHours() === hourDate.getHours();
  };

  // highlight minutes handlers
  const isSelectedMinutes = (minutesDate: Date) => {
    return selectedTime.getMinutes() === minutesDate.getMinutes();
  };

  // hours change handler
  const hourChangeHandler = (hourDate: Date) => {
    const newTime = setHours(selectedTime, hourDate.getHours());
    setSelectedTime(newTime);
    selectTimeHandler(newTime);
  };

  // minutes change handler
  const minutesChangeHandler = (minuteDate: Date) => {
    const newTime = setMinutes(selectedTime, minuteDate.getMinutes());
    setSelectedTime(newTime);
    selectTimeHandler(newTime);
  };

  const mergeStyles = (defaultStyles: React.CSSProperties, customStyles: React.CSSProperties) => ({
    ...defaultStyles,
    ...customStyles,
  });

  return {
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
  };
};
