import { useUser } from "@/entities/user/model";
import { useClaimGoldenRainMutation } from "@/shared/generated";
import { gqlClient } from "@/shared/providers/GraphqlClient";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export function useClaim() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const user = useUser();
  const { mutateAsync: claimAsync, isLoading: isLoadingClaim } = useClaimGoldenRainMutation(
    gqlClient,
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries({ queryKey: ["User"] });
        navigate(-1);
      }
    }
  );

  const claim = async (score: number) => {
    if (user?.id) {
      await claimAsync({ claimGoldenRainId: user.id, score });
    }
  };

  return { claim, isLoadingClaim };
}
