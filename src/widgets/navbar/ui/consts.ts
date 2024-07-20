import { OptionNavbar } from "./types";

import { emodjiTypes } from "@/shared/ui";

export const optionsNavbarDefault: OptionNavbar[] = [
  {
    id: "portfolio",
    emodjiName: emodjiTypes.EmodjiName.MONEY_BAG,
    label: "Portfolio"
  },
  {
    id: "friends",
    emodjiName: emodjiTypes.EmodjiName.HANDSHAKE,
    label: "Friends"
  },
  { id: "tasks", emodjiName: emodjiTypes.EmodjiName.TARGET, label: "Tasks" }
];

export const optionsNavbarCreator: OptionNavbar[] = [
  {
    id: "create",
    emodjiName: emodjiTypes.EmodjiName.DOCUMENT_ASSIGNMENT,
    label: "Create"
  },
  {
    id: "my-tasks",
    emodjiName: emodjiTypes.EmodjiName.STATS,
    label: "My tasks"
  }
];
