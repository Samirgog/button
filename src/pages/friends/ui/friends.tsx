import { BonusCard } from "@/features/bonus-card";
import { FriendsCard } from "@/features/friends-card";
import { InviteButton } from "@/features/invite-button";
import { Card, Layout, Typography } from "@/shared/ui";
import { Stack } from "@/shared/ui";
import React from "react";

export const Friends: React.FC = () => {
    return (
        <Layout>
            <Stack direction="column" gap={24}>
                <InviteButton />
                <Stack direction="column" gap={8}>
                    <Typography type="title" weight="medium">Statistics</Typography>
                    <Stack gap={16}>
                        <FriendsCard />
                        <BonusCard />
                    </Stack>
                </Stack>
                <Stack direction="column" gap={8}>
                    <Typography type="title" weight="medium">Invite friends and get Bonus</Typography>
                    <Card size="xl">
                        <Stack direction="column" gap={38}>
                            <Stack gap={12}>
                                <img src={require('../../../../public/coin_48.png')?.default} />
                                <Typography type="mega" weight="semi-bold">+150</Typography>
                            </Stack>
                            <Typography type="text" weight="semi-bold">FOR YOU AND A FRIEND</Typography>
                        </Stack>
                    </Card>
                </Stack>
            </Stack>
        </Layout>
    );
}