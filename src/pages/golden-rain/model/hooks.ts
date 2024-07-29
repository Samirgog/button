import { useEffect } from "react";

import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { STORAGE_KEY_GOLDEN_RAIN_SCORE } from "@/entities/task/ui/consts";
import { useUser } from "@/entities/user/model";
import { useClaimGoldenRainMutation, useSetGoldenRainTimestampMutation } from "@/shared/generated";
import { checkBeforeUTCMidnight, checkThisDay } from "@/shared/lib/date";
import { gqlClient } from "@/shared/providers/GraphqlClient";
import { toast } from "react-toastify";
import { emodjiConsts, emodjiTypes } from "@/shared/ui";
import { vibrate } from "@/shared/lib/navigator";

export function useGoldenRain() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const user = useUser();
  const storageScore = localStorage.getItem(STORAGE_KEY_GOLDEN_RAIN_SCORE);

  const { mutateAsync: setGoldenRainTimestamp } = useSetGoldenRainTimestampMutation(gqlClient, {
    onError: () => {
      toast(
        `${emodjiConsts.MAP_NAMES_EMODJI[emodjiTypes.EmodjiName.ANGRY_FACE]} Server erorr! We are trying to fix. Please try later`
      );
    }
  });

  const { mutateAsync: claimAsync, isLoading: isLoadingClaim } = useClaimGoldenRainMutation(
    gqlClient,
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries({ queryKey: ["User"] });
        vibrate(200);
        navigate(-1);
      },
      onError: () => {
        toast(
          `${emodjiConsts.MAP_NAMES_EMODJI[emodjiTypes.EmodjiName.ANGRY_FACE]} Server erorr! We are trying to fix. Please try later`
        );
      }
    }
  );

  const setAttemptTimestamp = async (score: number) => {
    localStorage.setItem(STORAGE_KEY_GOLDEN_RAIN_SCORE, String(score));

    if (user?.id) {
      await setGoldenRainTimestamp({ userId: user.id });
    }
  };

  const claim = async (score: number) => {
    if (user?.id) {
      await claimAsync(
        { userId: user.id, score },
        {
          onSuccess: () => {
            toast(
              `${emodjiConsts.MAP_NAMES_EMODJI[emodjiTypes.EmodjiName.MONEY_FACE]} Successfully claimed ${score}`
            );
          }
        }
      );
      localStorage.removeItem(STORAGE_KEY_GOLDEN_RAIN_SCORE);
    }
  };

  useEffect(() => {
    if (!user?.lastPlayedGoldenRain) {
      return;
    }

    const lastPlayedDate = new Date(user?.lastPlayedGoldenRain);

    if (checkThisDay(lastPlayedDate) && !checkBeforeUTCMidnight(lastPlayedDate)) {
      localStorage.removeItem(STORAGE_KEY_GOLDEN_RAIN_SCORE);
    }
  }, [user?.lastPlayedGoldenRain]);

  return { setAttemptTimestamp, claim, storageScore, isLoadingClaim };
}
