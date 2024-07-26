import React, { Dispatch, ReactNode, SetStateAction, useEffect, useRef, useState } from "react";

import { getRandomNumber } from "@/features/golden-rain-game/lib/getRandomNumber";
import { Coin } from "@/features/golden-rain-game/ui/coin";
import { GoldenRainContainerStyled } from "@/features/golden-rain-game/ui/styled";

type Props = {
  totalCoins: number;
  intervalMs: number;
  setScore: Dispatch<SetStateAction<number>>;
};

export const GoldenRainGame: React.FC<Props> = ({ totalCoins, intervalMs, setScore }) => {
  const [items, setItems] = useState<ReactNode[]>([]);
  const indexRef = useRef(0);

  useEffect(() => {
    if (indexRef.current >= totalCoins) {
      return;
    }

    const timeout = setTimeout(() => {
      setItems((prevItems) => [
        ...prevItems,
        <Coin key={getRandomNumber(1000, 5000)} setScore={setScore} />
      ]);
      indexRef.current += 1;
    }, intervalMs);

    return () => clearTimeout(timeout);
  }, [items]);

  return <GoldenRainContainerStyled>{items}</GoldenRainContainerStyled>;
};
