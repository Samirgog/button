import { emodjiTypes } from "@/shared/ui";
import React from "react";
import { useEarnedCard } from "../model";
import {CardStats} from "@/shared/ui/card-stats";

export const EarnedCard: React.FC = () => {
    const {earnedTotal, earnedPerDay} = useEarnedCard();

    return (
      <CardStats title='Earned' emodjiName={emodjiTypes.EmodjiName.FLYING_MONEY} total={earnedTotal} dailyValue={earnedPerDay} style={{flexBasis: '50%'}} />
    );
}
