import { Card, Emodji, Typography, Stack, emodjiTypes } from "@/shared/ui";
import React from "react";
import { useEarnedCard } from "../model";

export const EarnedCard: React.FC = () => {
    const {earnedTotal, earnedPerDay} = useEarnedCard();

    return (
        <Card size="sm">
            <Stack direction="column" gap={16}>
                <Stack gap={10}>
                    <Emodji emodjiName={emodjiTypes.EmodjiName.FLYING_MONEY} size={36} />
                    <Typography type="title">Earned</Typography>
                </Stack>
                <Stack gap={10}>
                    <Typography type="title" weight="medium" color="warning">{earnedTotal}</Typography>
                    <Typography type="text" weight="medium">(+ {earnedPerDay})</Typography>
                </Stack>
            </Stack>
        </Card>
    );
}