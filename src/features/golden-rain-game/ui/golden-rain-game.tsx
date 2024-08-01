import React, { Dispatch, ReactNode, SetStateAction, useEffect, useRef, useState } from "react";

import { Coin } from "@/features/golden-rain-game/ui/coin";
import { GoldenRainContainerStyled } from "@/features/golden-rain-game/ui/styled";
import { v4 as uuid } from "uuid";

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
      setItems((prevItems) => [...prevItems, <Coin key={uuid()} setScore={setScore} />]);
      indexRef.current += 1;
    }, intervalMs);

    return () => clearTimeout(timeout);
  }, [items]);

  return <GoldenRainContainerStyled>{items}</GoldenRainContainerStyled>;
};
