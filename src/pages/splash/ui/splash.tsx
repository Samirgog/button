import React, { useEffect, useState } from "react";

import styled, { keyframes } from "styled-components";

import { Stack, Typography } from "@/shared/ui";

const LoafAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.95);
  }
`;

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-30px);
  }
`;

const getCircleCoord = (index: number) => {
  const letterWidth = 264.52 / 6;
  const letterHalfWidth = letterWidth / 2;
  const result = letterHalfWidth + letterWidth * (index - 1) - 12.5;

  return `${result}px`;
};

const move = keyframes`
  0%, 100% {
    left: ${getCircleCoord(1)};
  }
  10%, 90% {
    left: ${getCircleCoord(2)};
  }
  20%, 80% {
    left: ${getCircleCoord(3)};
  }
  30%, 70% {
    left: ${getCircleCoord(4)};
  }
  40%, 60% {
    left: ${getCircleCoord(5)};
  }
  50% {
    left: ${getCircleCoord(6)};
  }
`;

const Coin = styled.img`
  width: 250px;
  height: auto;
  animation: ${LoafAnimation} 0.6s infinite;
  cursor: pointer;
  object-fit: contain;
  z-index: 100;
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: 900;
  color: #fff;
  font-family: "Lucida Console", monospace;
  position: relative;
`;

const Circle = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  top: -11px;
  animation:
    ${bounce} 0.4s infinite ease,
    ${move} 4s infinite linear;
`;

export const Splash = () => {
  const [isTonIcon, setIsTonIcon] = useState(false);
  const text = "BUTTON";

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTonIcon((prev) => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Stack direction="column" align="center" style={{ paddingTop: "30%", overflow: "hidden" }}>
      <Text>
        <Circle src={isTonIcon ? "/button/ton.png" : "/button/loaf_coin.png"} alt={"coin"} />
        {text.split("").map((letter, index) => (
          <div key={index} style={{ padding: "0 10px" }}>
            {letter}
          </div>
        ))}
      </Text>

      <Typography type="mini" color="disabled" weight="bold" style={{ marginBottom: 56 }}>
        nothing but ton...
      </Typography>

      <Coin src={"/button/loaf_coin.png"} alt={"coin"} />
    </Stack>
  );
};
