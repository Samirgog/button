import { OptionNavbar } from "./types";

import { emodjiTypes } from "@/shared/ui";

export const optionsNavbar: OptionNavbar[] = [
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
