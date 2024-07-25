import React, { Dispatch, ReactNode, SetStateAction, useEffect, useRef, useState } from "react";

import { getRandomNumber } from "@/features/golden-rain-game/lib/getRandomNumber";
import { Coin } from "@/features/golden-rain-game/ui/coin";
import { GoldenRainContainerStyled } from "@/features/golden-rain-game/ui/styled";

const TOTAL_COINS = 200;
const INTERVAL_MS = 150;

type Props = {
  setScore: Dispatch<SetStateAction<number>>;
  timerOffset: number;
  setTimerValue: (value: number) => void;
};

export const GoldenRainGame: React.FC<Props> = ({ setScore, timerOffset, setTimerValue }) => {
  const [items, setItems] = useState<ReactNode[]>([]);
  const indexRef = useRef(0);

  useEffect(() => {
    if (indexRef.current >= TOTAL_COINS) {
      return;
    }

    const timeout = setTimeout(() => {
      setItems((prevItems) => [
        ...prevItems,
        <Coin key={getRandomNumber(1000, 5000)} setScore={setScore} />
      ]);
      indexRef.current += 1;
    }, INTERVAL_MS);

    return () => clearTimeout(timeout);
  }, [items]);

  useEffect(() => {
    setTimerValue((TOTAL_COINS * INTERVAL_MS) / 1000 + timerOffset);
  }, [setTimerValue]);

  return <GoldenRainContainerStyled>{items}</GoldenRainContainerStyled>;
};
