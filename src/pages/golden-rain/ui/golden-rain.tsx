import React, { useEffect, useState } from "react";

import { Layout } from "@/app/layouts/layout";
import { GoldenRainGame } from "@/features/golden-rain-game";
import { Header } from "@/features/header";
import { useTimer } from "@/shared/hooks/useTimer";
import { Button, Stack, Typography } from "@/shared/ui";

const GAME_TIMER_OFFSET = 0;

export const GoldenRain: React.FC = () => {
  const [score, setScore] = useState(0);
  const [start, setStart] = useState(false);
  const { timerValue: gameTimerValue, setTimerValue: setGameTimerValue } = useTimer(0);
  const { timerValue: startTimerValue, setTimerValue: setStartTimerValue } = useTimer(0);
  const currentGameTimerValue =
    gameTimerValue - GAME_TIMER_OFFSET >= 0 ? gameTimerValue - GAME_TIMER_OFFSET : 0;

  const handleStart = () => {
    setStart(true);
  };

  useEffect(() => {
    if (start) {
      setStartTimerValue(3);
    }
  }, [setStartTimerValue, start]);

  useEffect(() => {
    if (gameTimerValue === 0) {
      setStart(false);
    }
  }, [gameTimerValue]);

  return (
    <Layout hideNavbar style={{ overflow: "hidden", paddingBottom: 0 }}>
      <Stack direction="column" gap={20} style={{ height: "100vh" }}>
        <Header title="Golden Rain" withBack />

        {start && startTimerValue === 0 && gameTimerValue !== 0 && (
          <Stack align="center" justify="space-between" gap={16}>
            <Typography type="title">Score: {score}</Typography>
            <Typography
              type="title"
              style={currentGameTimerValue <= 5 ? { color: "#fa0a0a" } : undefined}
            >
              Left: {currentGameTimerValue}
            </Typography>
          </Stack>
        )}

        {start && startTimerValue === 0 && (
          <GoldenRainGame
            setScore={setScore}
            setTimerValue={setGameTimerValue}
            timerOffset={GAME_TIMER_OFFSET}
          />
        )}

        {!start && (
          <Stack align="center" justify="center" style={{ flexGrow: 1, marginBottom: 50 }}>
            <Button type="gradient" size="xl" style={{ width: 200 }} onClick={handleStart}>
              <Typography type="mega" weight="bold">
                Start
              </Typography>
            </Button>
          </Stack>
        )}

        {start && startTimerValue !== 0 && (
          <Stack align="center" justify="center" style={{ flexGrow: 1, marginBottom: 50 }}>
            <Typography weight="bold" style={{ fontSize: 48, lineHeight: 0 }}>
              {startTimerValue}
            </Typography>
          </Stack>
        )}
      </Stack>
    </Layout>
  );
};
