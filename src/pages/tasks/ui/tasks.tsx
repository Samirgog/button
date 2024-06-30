import { Emodji, Layout, Stack, Typography, emodjiTypes} from "@/shared/ui";
import React from "react";

export const Tasks: React.FC = () => {
    return (
        <Layout>
            <Stack gap={12}>
                <Emodji emodjiName={emodjiTypes.EmodjiName.FLYING_MONEY} size={48} />
                <Typography type="mega" weight="medium">Earn Button Coins</Typography>
            </Stack>
            
        </Layout>
    );
}