import { useEffect, useState } from "react";

import { useShallow } from "zustand/react/shallow";

import { useStoreUser } from "./store";
import { User } from "./types";

// TODO: Все тут переделать
const mockUser: User = {
  id: 1,
  telegramId: 928304,
  name: "Sam",
  balance: 100000000,
  earned: 90999990999,
  referralParentId: 9302848
};
const getUser = (initData: string, refId: number): Promise<User> => {
  console.log({ initData, refId });
  return new Promise<User>((resolve) => {
    setTimeout(() => resolve(mockUser), 3000);
  });
};

export function useAuth() {
  const [setUser] = useStoreUser(useShallow((state) => [state.setUser]));
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authenticate = async () => {
    const queryParams = new URLSearchParams(window.location.search);
    const referralId = queryParams.get("referralId");
    const { initData = "" } = window.Telegram.WebApp || {};

    return getUser(initData, Number(referralId));
  };

  useEffect(() => {
    const initAuth = async () => {
      try {
        const user = await authenticate();

        if (user) {
          setUser(user);

          setIsAuthenticated(true);
        }
      } catch (error) {
        console.log("AUTH ERROR ", error);
      } finally {
        setIsLoading(false);
      }
    };

    initAuth();
  }, [setUser]);

  return { isLoading, isAuthenticated };
}

export function useUser() {
  const [user] = useStoreUser(useShallow((state) => [state.user, state.setUser]));

  return user;
}
