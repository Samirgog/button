import { useEffect, useState } from "react";

import { User } from "./types";
import { STORAGE_KEY_USER } from "./consts";

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
          sessionStorage.setItem(STORAGE_KEY_USER, JSON.stringify(user));
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.log("AUTH ERROR ", error);
      } finally {
        setIsLoading(false);
      }
    };

    initAuth();
  }, []);

  return { isLoading, isAuthenticated };
}

export function useUser() {
  const userFromStorage = sessionStorage.getItem(STORAGE_KEY_USER) ?? "";

  return JSON.parse(userFromStorage) as User;
}
