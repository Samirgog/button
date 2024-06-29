import { Balance } from "@/entities/balance";
import { Button, Layout, Typography, Stack } from "@/shared/ui";
import React from "react";
import { CompletedCard } from "@/features/completed-card";
import { EarnedCard } from "@/features/earned-card";

export const Portfolio: React.FC = () => {
    return (
        <Layout>
            <Stack direction="column" gap={24} style={{alignItems: 'center'}}>
                <Balance />
                <Typography type="title" weight="medium">Statistics</Typography>
                <Stack gap={16}>
                    <CompletedCard />
                    <EarnedCard />
                </Stack>
                <Button type="main" size="xl" disabled>CONVERT TO TON</Button>
            </Stack>
        </Layout>
    );
}