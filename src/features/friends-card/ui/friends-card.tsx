import React from "react";

import { useFriendsCard } from "../model";

import { emodjiTypes } from "@/shared/ui";
import { CardStats } from "@/shared/ui/card-stats";

export const FriendsCard: React.FC = () => {
  const { friendsTotal, friendsPerDay } = useFriendsCard();

  return (
    <CardStats
      title="Friends"
      emodjiName={emodjiTypes.EmodjiName.WEED_GESTURE}
      total={friendsTotal}
      dailyValue={friendsPerDay}
      style={{ flexBasis: "50%" }}
    />
  );
};
