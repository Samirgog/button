import { create } from "zustand";

import { User } from "./types";

type StateUser = {
  user: User | null;
  setUser: (user: User) => void;
};

export const useStoreUser = create<StateUser>((set) => ({
  user: null,
  setUser: (user) => set(() => ({ user }))
}));
