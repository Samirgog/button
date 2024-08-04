import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { useGoldenRain } from "../model";

import { Layout } from "@/app/layouts/layout";
import { GoldenRainGame } from "@/features/golden-rain-game";
import { useTimer } from "@/shared/hooks/useTimer";
import { vibrate } from "@/shared/lib/telegram";
import { Button, Emodji, emodjiConsts, emodjiTypes, Stack, Typography } from "@/shared/ui";

type Stage = "init" | "countdown" | "in-progress" | "finish";

const TOTAL_COINS = 200;
const INTERVAL_MS = 150;

export const GoldenRain: React.FC = () => {
  const navigate = useNavigate();
  const { claim, setAttemptTimestamp, storageScore, isLoadingClaim } = useGoldenRain();
  const [stage, setStage] = useState<Stage>("init");
  const [score, setScore] = useState(Number(storageScore ?? 0));
  const { timerValue: gameTimerValue, setTimerValue: setGameTimerValue } = useTimer(0);
  const { timerValue: startTimerValue, setTimerValue: setStartTimerValue } = useTimer(0);
  const { timerValue: claimTimerValue, setTimerValue: setClaimTimerValue } = useTimer(0);

  const handleStart = () => {
    setStage("countdown");
    setStartTimerValue(3);
  };

  const handleEnd = () => {
    vibrate("soft");
    claim(score);
  };

  useEffect(() => {
    const handleClickBack = () => navigate(-1);

    if (window.Telegram?.WebApp?.BackButton) {
      window.Telegram.WebApp.BackButton.show();
      window.Telegram.WebApp.BackButton.onClick(handleClickBack);
    }

    return () => {
      window.Telegram.WebApp.BackButton.offClick(handleClickBack);
      window.Telegram.WebApp.BackButton.hide();
    };
  }, []);

  useEffect(() => {
    if (storageScore) {
      setStage("finish");
      return;
    }

    if (stage === "countdown" && startTimerValue === 0) {
      setStage("in-progress");
      setGameTimerValue((TOTAL_COINS * INTERVAL_MS) / 1000);
      return;
    }

    if (stage === "in-progress" && gameTimerValue === 0) {
      setStage("finish");
      setAttemptTimestamp(score);
      setClaimTimerValue(3);
      return;
    }
  }, [
    gameTimerValue,
    storageScore,
    score,
    setAttemptTimestamp,
    setClaimTimerValue,
    setGameTimerValue,
    stage,
    startTimerValue
  ]);

  return (
    <Layout hideNavbar style={{ overflow: "hidden", paddingBottom: 0 }}>
      <Stack direction="column" gap={20} style={{ height: "100vh" }}>
        <Stack align="center" justify="center">
          <Typography type="mega" weight="bold" color="warning">
            {emodjiConsts.MAP_NAMES_EMODJI[emodjiTypes.EmodjiName.CLOUD_WITH_RAIN]} Golden Rain
          </Typography>
        </Stack>

        {stage === "in-progress" && (
          <Stack align="center" justify="space-between" gap={16}>
            <Typography type="title">Score: {score}</Typography>
            <Typography type="title" style={gameTimerValue <= 5 ? { color: "#fa0a0a" } : undefined}>
              Left: {gameTimerValue}
            </Typography>
          </Stack>
        )}

        {stage === "init" && (
          <Stack align="center" justify="center" style={{ flexGrow: 1, marginBottom: 50 }}>
            <Button size="md" style={{ width: 200 }} onClick={handleStart}>
              <Typography type="mega" weight="bold">
                Start
              </Typography>
            </Button>
          </Stack>
        )}

        {stage === "countdown" && (
          <Stack align="center" justify="center" style={{ flexGrow: 1, marginBottom: 50 }}>
            <Typography weight="bold" style={{ fontSize: 48 }}>
              {startTimerValue}
            </Typography>
          </Stack>
        )}

        {stage === "in-progress" && (
          <GoldenRainGame totalCoins={TOTAL_COINS} intervalMs={INTERVAL_MS} setScore={setScore} />
        )}

        {stage === "finish" && (
          <Stack
            align="center"
            justify="center"
            direction="column"
            gap={12}
            style={{ flexGrow: 1, marginBottom: 50 }}
          >
            <Emodji
              emodjiName={
                score > 300 ? emodjiTypes.EmodjiName.PARTY_POPPER : emodjiTypes.EmodjiName.SAD
              }
              size={48}
            />
            <Typography type="title" weight="semi-bold">
              {score > 300 ? "Congratulations!" : "Better luck next time..."}
            </Typography>
            <Stack align="center" justify="center" gap={4}>
              <Typography type="mega" weight="bold" color="warning">
                Your score: {score}
              </Typography>
              <img src="/button/loaf_coin.png" alt="loaf_coin" width={24} height={24} />
            </Stack>
            <Button
              size="md"
              style={{ width: 200, marginTop: 24 }}
              onClick={handleEnd}
              disabled={claimTimerValue !== 0 || isLoadingClaim}
            >
              <Typography type="mega" weight="bold">
                {claimTimerValue === 0 ? (score > 0 ? "Claim" : "Back") : claimTimerValue}
              </Typography>
            </Button>
          </Stack>
        )}
      </Stack>
    </Layout>
  );
};
