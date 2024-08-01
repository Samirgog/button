import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

import { getRandomNumber } from "@/features/golden-rain-game/lib/getRandomNumber";
import {
  CoinContainerStyled,
  CoinStyled,
  CoinWrapperStyled,
  RewardStyled
} from "@/features/golden-rain-game/ui/styled";
import { vibrate } from "@/shared/lib/telegram";

type Props = {
  setScore: Dispatch<SetStateAction<number>>;
};

export const Coin: React.FC<Props> = ({ setScore }) => {
  const [clicked, setClicked] = useState(false);
  const [removed, setRemoved] = useState(false);
  const windowWidth = window.innerWidth;
  const offset = windowWidth / 2 - 50;
  const xOffset = getRandomNumber(-offset, offset);
  const factor = Math.random();
  const reward = Math.ceil(factor * 50);

  const handleClick = () => {
    vibrate("soft");
    setScore((prev) => prev + reward);
    setClicked(true);
  };

  const handleAnimationEnd = () => {
    setRemoved(true);
  };

  useEffect(() => {
    if (!clicked) {
      return;
    }

    const timeout = setTimeout(() => {
      setRemoved(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [clicked]);

  if (removed) {
    return null;
  }

  return (
    <CoinContainerStyled factor={factor} xOffset={xOffset} onAnimationEnd={handleAnimationEnd}>
      <CoinWrapperStyled
        onMouseDown={handleClick}
        onTouchStart={handleClick}
        style={{ display: clicked ? "none" : "block" }}
      >
        <CoinStyled src="/button/loaf_coin.png" factor={factor} />
      </CoinWrapperStyled>
      {clicked && (
        <RewardStyled type="mega" weight="semi-bold">
          {`+${reward}`}
        </RewardStyled>
      )}
    </CoinContainerStyled>
  );
};
