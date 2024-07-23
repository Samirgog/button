import { useEffect, useState } from "react";

import { useShallow } from "zustand/react/shallow";

import { useStoreUser } from "./store";
import { TUser, useAuthMutation } from "@/shared/generated";
import { gqlClient } from "@/shared/providers/GraphqlClient";

// const mock = {
//   id: 1,
//   name: "Самир Гафаров",
//   earned: 0,
//   balance: 0,
//   completedTasks: [],
//   referrals: [],
//   createdAt: "2024-07-23T10:09:31.861Z",
//   updatedAt: "2024-07-23T10:09:31.861Z",
//   role: "user"
// };

export function useAuth() {
  const [setUser] = useStoreUser(useShallow((state) => [state.setUser]));
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { mutateAsync: authUser, isLoading } = useAuthMutation(gqlClient, {
    onSuccess: (data) => {
      if (data.auth) {
        setUser(data.auth as TUser);
        setIsAuthenticated(true);
      }
    }
  });

  const authenticate = async () => {
    const queryParams = new URLSearchParams(window.location.search);
    const referralId = queryParams.get("referralId");
    const { initData = "" } = window.Telegram.WebApp || {};

    await authUser({
      input: { initData, referralParentId: referralId ? Number(referralId) : undefined }
    });
  };

  useEffect(() => {
    authenticate();
  }, [setUser]);

  return { isLoading, isAuthenticated };
}

export function useUser() {
  return useStoreUser(useShallow((state) => state.user));
}
