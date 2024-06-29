import { Card, Emodji, Typography, Stack, emodjiTypes } from "@/shared/ui";
import React from "react";
import { useFriendsCard } from "../model";

export const FriendsCard: React.FC = () => {
    const {friendsTotal, friendsPerDay} = useFriendsCard();

    return (
        <Card size="sm">
            <Stack direction="column" gap={16}>
                <Stack gap={10}>
                    <Emodji emodjiName={emodjiTypes.EmodjiName.WEED_GESTURE} size={36} />
                    <Typography type="title">Friends</Typography>
                </Stack>
                <Stack gap={10}>
                    <Typography type="title" weight="medium" color="warning">{friendsTotal}</Typography>
                    <Typography type="text" weight="medium">(+ {friendsPerDay})</Typography>
                </Stack>
            </Stack>
        </Card>
    );
}