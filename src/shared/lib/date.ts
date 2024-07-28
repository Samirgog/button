export const getUTCMidnightDate = () => {
  const now = new Date();
  const midnight = new Date(now);

  midnight.setUTCDate(now.getUTCDate() + 1);
  midnight.setUTCHours(0, 0, 0, 0);

  return midnight;
};

export const checkThisDay = (date: Date | null) => {
  if (!date) {
    return false;
  }

  return date.getDate() === new Date().getDate();
};

export const checkBeforeUTCMidnight = (date: Date) => {
  const nextDayMidnight = getUTCMidnightDate();

  return date < nextDayMidnight;
};

export const getTimeDifferenceMs = (from: Date | null, to: Date | null) => {
  if (!from || !to) {
    return 0;
  }

  return from.getTime() - to.getTime();
};
