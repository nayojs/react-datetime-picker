export const generateYears = () => {
  const years = [];
  for (let i = 2100; i >= 1900; i--) {
    years.push(i);
  }
  return years;
};
