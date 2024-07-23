import { useEffect, useState } from "react";

export const useTimer = (seconds: number) => {
  const [timerValue, setTimerValue] = useState(seconds);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timerValue !== 0) {
        setTimerValue((prev) => prev - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds, timerValue]);

  return {
    timerValue,
    setTimerValue
  };
};
