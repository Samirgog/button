import { emodjiTypes } from "@/shared/ui";
import React from "react";
import { useCompletedCard } from "../model";
import { CardStats } from "@/shared/ui/card-stats";

export const CompletedCard: React.FC = () => {
  const { completedTotal, completedPerDay } = useCompletedCard();

  return (
    <CardStats
      title="Completed"
      emodjiName={emodjiTypes.EmodjiName.SUCCESS_CHECK}
      total={completedTotal}
      dailyValue={completedPerDay}
      style={{ flexBasis: "50%" }}
    />
  );
};
