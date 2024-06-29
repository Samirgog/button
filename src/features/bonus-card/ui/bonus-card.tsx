import { Card, Emodji, Typography, Stack, emodjiTypes } from "@/shared/ui";
import React from "react";
import { useBonusCard } from "../model";

export const BonusCard: React.FC = () => {
    const {bonusTotal, bonusPerDay} = useBonusCard();

    return (
        <Card size="sm">
            <Stack direction="column" gap={16}>
                <Stack gap={10}>
                    <Emodji emodjiName={emodjiTypes.EmodjiName.MONEY_STACK} size={36} />
                    <Typography type="title">Bonus</Typography>
                </Stack>
                <Stack gap={10}>
                    <Typography type="title" weight="medium" color="warning">{bonusTotal}</Typography>
                    <Typography type="text" weight="medium">(+ {bonusPerDay})</Typography>
                </Stack>
            </Stack>
        </Card>
    );
}