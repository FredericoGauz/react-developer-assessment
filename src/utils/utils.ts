const dateFormatter = new Intl.DateTimeFormat([], {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'short',
});

export const friendlyDate = (date: string) => {
  const displayDate = new Date(Date.parse(date));
  return dateFormatter.format(displayDate);
};
