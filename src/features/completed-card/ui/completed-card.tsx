import { Card, Emodji, Typography, Stack, emodjiTypes } from "@/shared/ui";
import React from "react";
import { useCompletedCard } from "../model";

export const CompletedCard: React.FC = () => {
    const {completedTotal, completedPerDay} = useCompletedCard();

    return (
        <Card size="sm">
            <Stack direction="column" gap={16}>
                <Stack gap={10}>
                    <Emodji emodjiName={emodjiTypes.EmodjiName.SUCCESS_CHECK} size={36} />
                    <Typography type="title">Completed</Typography>
                </Stack>
                <Stack gap={10}>
                    <Typography type="title" weight="medium" color="warning">{completedTotal}</Typography>
                    <Typography type="text" weight="medium">(+ {completedPerDay})</Typography>
                </Stack>
            </Stack>
        </Card>
    );
}