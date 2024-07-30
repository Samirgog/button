import { useEffect, useState } from "react";

import { toast } from "react-toastify";
import { useShallow } from "zustand/react/shallow";

import { useStoreUser } from "./store";

import { TUser, useAuthMutation, useUserQuery } from "@/shared/generated";
import { gqlClient } from "@/shared/providers/GraphqlClient";
import { emodjiConsts, emodjiTypes } from "@/shared/ui";

export function useAuth() {
  const [setUser] = useStoreUser(useShallow((state) => [state.setUser]));
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState<number | null>(null);

  const { data: { user } = {} } = useUserQuery(
    gqlClient,
    { userId: Number(userId) },
    {
      enabled: Boolean(userId),
      onError: () => {
        toast(
          `${emodjiConsts.MAP_NAMES_EMODJI[emodjiTypes.EmodjiName.ANGRY_FACE]} Server erorr! We are trying to fix. Please try later`
        );
      }
    }
  );

  const { mutateAsync: authUser, isLoading } = useAuthMutation(gqlClient, {
    onSuccess: (data) => {
      if (data.auth) {
        setUserId(data.auth.id);
      }
    },
    onError: () => {
      toast(
        `${emodjiConsts.MAP_NAMES_EMODJI[emodjiTypes.EmodjiName.STOP_HAND]} Authentication error! Please try later.`
      );
    }
  });

  const authenticate = async () => {
    const queryParams = new URLSearchParams(window.location.search);
    const referralId = queryParams.get("referralId");

    const { initData = "" } = window.Telegram.WebApp || {};

    await authUser({
      input: {
        initData,
        referralParentId: referralId ? Number(referralId) : undefined
      }
    });
  };

  useEffect(() => {
    authenticate();
  }, []);

  useEffect(() => {
    if (user) {
      setUser(user as TUser);
      setIsAuthenticated(true);
    }
  }, [setUser, user]);

  return { isLoading, isAuthenticated };
}

export function useUser() {
  return useStoreUser(useShallow((state) => state.user));
}
