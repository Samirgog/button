import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { useUser } from "@/entities/user/model";
import { useTimer } from "@/shared/hooks/useTimer";
import { checkThisDay, getTimeDifferenceMs, getUTCMidnightDate } from "@/shared/lib/date";
import { CardGame } from "@/shared/ui/card-game";

type Props = React.HTMLAttributes<HTMLDivElement>;

const formatTime = (seconds: number) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
};

export const GoldenRainCard: React.FC<Props> = ({ ...htmlAttributes }) => {
  const navigate = useNavigate();
  const user = useUser();

  const lastPlayDate = user?.lastPlayedGoldenRain ? new Date(user?.lastPlayedGoldenRain) : null;
  const isThisDay = checkThisDay(lastPlayDate);

  const nowDate = new Date();
  const utcMidnightDate = getUTCMidnightDate();
  const secondsLeft = isThisDay
    ? Math.ceil(getTimeDifferenceMs(utcMidnightDate, nowDate) / 1000)
    : 0;

  const { timerValue, setTimerValue } = useTimer(0);

  useEffect(() => {
    if (secondsLeft > 0) {
      setTimerValue(secondsLeft);
    }
  }, [secondsLeft, setTimerValue]);

  const handleClick = () => {
    if (timerValue !== 0) {
      return;
    }

    navigate("/button/golden-rain");
  };

  return (
    <CardGame
      {...htmlAttributes}
      bgImage="/button/games/golden-rain.webp"
      title="Golden Rain"
      time={timerValue !== 0 ? formatTime(timerValue) : undefined}
      onClick={handleClick}
    />
  );
};
