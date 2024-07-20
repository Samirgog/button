import { emodjiTypes } from "@/shared/ui";

export type IdNavbarItem = "portfolio" | "friends" | "tasks" | "create" | "my-tasks";

export type OptionNavbar = {
  id: IdNavbarItem;
  emodjiName: emodjiTypes.EmodjiName;
  label: string;
};
