import { setHours, setMinutes } from "date-fns";

export const generateHours = () => {
  const hours = [];
  for (let i = 0; i < 24; i++) {
    hours.push(setHours(new Date(), i));
  }
  return hours;
};

export const generateMinutes = () => {
  const minutes = [];
  for (let i = 0; i < 60; i++) {
    minutes.push(setMinutes(new Date(), i));
  }
  return minutes;
};
