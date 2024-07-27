import React, { useEffect, useState } from "react";

import { CardGame } from "@/shared/ui/card-game";
import { useUser } from "@/entities/user/model";
import { useTimer } from "@/shared/hooks/useTimer";
import { useNavigate } from "react-router-dom";

type Props = React.HTMLAttributes<HTMLDivElement>;

const getTimeDifferenceMs = (from: Date, to: Date) => {
  if (!from || !to) {
    return 0;
  }

  return from.getTime() - to.getTime();
};

const formatTime = (seconds: number) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
};

export const GoldenRainCard: React.FC<Props> = ({ ...htmlAttributes }) => {
  const navigate = useNavigate();
  const user = useUser();
  const { timerValue, setTimerValue } = useTimer(
    getTimeDifferenceMs(new Date(), new Date(user?.lastPlayedGoldenRain)) / 1000
  );
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (user?.lastPlayedGoldenRain !== undefined) {
      if (user.lastPlayedGoldenRain === null) {
        setActive(true);

        return;
      }

      const oneDayMs = 24 * 60 * 60 * 1000;
      const checkDates =
        getTimeDifferenceMs(new Date(), new Date(user.lastPlayedGoldenRain)) >= oneDayMs;

      if (checkDates) {
        setActive(true);

        return;
      }
    }
  }, [user?.lastPlayedGoldenRain]);

  useEffect(() => {
    if (active) {
      setTimerValue(0);

      return;
    }

    setTimerValue(getTimeDifferenceMs(new Date(), new Date(user?.lastPlayedGoldenRain)) / 1000);
  }, [active, user?.lastPlayedGoldenRain]);

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
