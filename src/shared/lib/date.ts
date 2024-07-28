export const getUTCMidnightDate = () => {
  const now = new Date();
  const midnight = new Date(now);

  midnight.setUTCDate(now.getUTCDate() + 1);
  midnight.setUTCHours(0, 0, 0, 0);

  return midnight;
};

export const checkBeforeUTCMidnight = (date: Date) => {
  const nextDayMidnight = getUTCMidnightDate();

  return date < nextDayMidnight;
};

export const getTimeDifferenceMs = (from: Date, to: Date) => {
  if (!from || !to) {
    return 0;
  }

  return from.getTime() - to.getTime();
};
