import { emodjiTypes } from "@/shared/ui";
import React from "react";
import { useBonusCard } from "../model";
import {CardStats} from "@/shared/ui/card-stats";

export const BonusCard: React.FC = () => {
    const {bonusTotal, bonusPerDay} = useBonusCard();

    return (
      <CardStats title='Bonus' emodjiName={emodjiTypes.EmodjiName.MONEY_STACK} total={bonusTotal} dailyValue={bonusPerDay} style={{flexBasis: '50%'}} />
    );
}
