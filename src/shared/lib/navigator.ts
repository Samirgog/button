export const vibrate = (style: "light" | "medium" | "heavy" | "rigid" | "soft") => {
  if (window.Telegram?.WebApp?.HapticFeedback) {
    window.Telegram.WebApp.HapticFeedback.impactOccurred(style);
  }
};
