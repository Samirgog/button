import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { useUser } from "@/entities/user/model";
import { useGoldenRain } from "@/pages/golden-rain/model";
import { useTimer } from "@/shared/hooks/useTimer";
import { getTimeDifferenceMs, getUTCMidnightDate } from "@/shared/lib/date";
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
  const { timerValue, setTimerValue } = useTimer(0);
  const [active, setActive] = useState(false);

  const utcMidnightDate = getUTCMidnightDate();
  const lastPlayDate = user?.lastPlayedGoldenRain;
  const { storageScore } = useGoldenRain();

  useEffect(() => {
    if (!lastPlayDate) {
      setActive(true);
      return;
    }

    setTimerValue(getTimeDifferenceMs(utcMidnightDate, lastPlayDate) / 1000);
  }, [lastPlayDate, setTimerValue, utcMidnightDate]);

  useEffect(() => {
    setActive(timerValue === 0 && !storageScore);
  }, [storageScore, timerValue]);

  const handleClick = () => {
    if (!active) {
      return;
    }

    navigate("/button/golden-rain");
  };

  return (
    <CardGame
      {...htmlAttributes}
      bgImage="/button/games/golden-rain.webp"
      title="Golden Rain"
      time={!active ? formatTime(timerValue) : undefined}
      onClick={handleClick}
    />
  );
};
