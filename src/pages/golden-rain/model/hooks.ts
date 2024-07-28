import { useEffect } from "react";

import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { STORAGE_KEY_GOLDEN_RAIN_SCORE } from "@/entities/task/ui/consts";
import { useUser } from "@/entities/user/model";
import { useClaimGoldenRainMutation, useSetGoldenRainTimestampMutation } from "@/shared/generated";
import { checkBeforeUTCMidnight } from "@/shared/lib/date";
import { gqlClient } from "@/shared/providers/GraphqlClient";

export function useGoldenRain() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const user = useUser();
  const storageScore = localStorage.getItem(STORAGE_KEY_GOLDEN_RAIN_SCORE);

  const { mutateAsync: setGoldenRainTimestamp } = useSetGoldenRainTimestampMutation(gqlClient);

  const { mutateAsync: claimAsync, isLoading: isLoadingClaim } = useClaimGoldenRainMutation(
    gqlClient,
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries({ queryKey: ["User"] });
        navigate(-1);
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
      await claimAsync({ userId: user.id, score });
      localStorage.removeItem(STORAGE_KEY_GOLDEN_RAIN_SCORE);
    }
  };

  useEffect(() => {
    if (!user?.lastPlayedGoldenRain) {
      return;
    }

    if (!checkBeforeUTCMidnight(user?.lastPlayedGoldenRain)) {
      localStorage.removeItem(STORAGE_KEY_GOLDEN_RAIN_SCORE);
    }
  }, [user?.lastPlayedGoldenRain]);

  return { setAttemptTimestamp, claim, storageScore, isLoadingClaim };
}
