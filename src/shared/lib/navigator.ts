export const vibrate = (ms: number) => {
  if (navigator.vibrate) {
    navigator.vibrate(ms);
  }
};
