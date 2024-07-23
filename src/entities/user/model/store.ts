import { create } from "zustand";

import { TUser } from "@/shared/generated";

type StateUser = {
  user: TUser | null;
  setUser: (user: TUser) => void;
};

export const useStoreUser = create<StateUser>((set) => ({
  user: null,
  setUser: (user) => set(() => ({ user }))
}));
