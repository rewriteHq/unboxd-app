export const getDaysInMonth = (month: number, year: number) => {
  var date = new Date(year, month, 1);
  var days = [];
  while (date.getMonth() === month) {
    days.push({
      text: new Date(date).getDate(),
      value: new Date(date).getDate(),
    });
    date.setDate(date.getDate() + 1);
  }
  return days;
};

export const months = [
  { text: 'January', value: 0 },
  { text: 'February', value: 1 },
  { text: 'March', value: 2 },
  { text: 'April', value: 3 },
  { text: 'May', value: 4 },
  { text: 'June', value: 5 },
  { text: 'July', value: 6 },
  { text: 'August', value: 7 },
  { text: 'September', value: 8 },
  { text: 'October', value: 9 },
  { text: 'November', value: 10 },
  { text: 'December', value: 11 },
];

export const generateYears = (startDate: Date, range: number) => {
  let years: Array<{ text: number; value: number }> = [];
  const startYear = startDate.getFullYear();
  for (let i = startYear; i < startYear + range; i++) {
    years.push({ text: i, value: i });
  }

  return years;
};
