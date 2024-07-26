import React from "react";

import { Badge, ButtonWrapper } from "@/features/convert-button/ui/styled";
import { Button, Stack, Typography } from "@/shared/ui";

export const ConvertButton: React.FC = () => {
  return (
    <ButtonWrapper>
      <Button size="md" disabled style={{ width: "100%" }}>
        <Stack gap={8} justify="center" align="center">
          <Typography type="title" color="inherit">
            Convert to TON
          </Typography>
          <img
            width={28}
            height={28}
            src={"/button/ton.png"}
            alt={"ton"}
            style={{ opacity: 0.4 }}
          />
        </Stack>
      </Button>

      <Badge>soon</Badge>
    </ButtonWrapper>
  );
};
