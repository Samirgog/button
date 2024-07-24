import React from "react";

import { MobileOnlyQRStyled, QRCode } from "./styled";

import { Typography } from "@/shared/ui";

export const MobileOnlyQR: React.FC = () => {
  return (
    <MobileOnlyQRStyled>
      <QRCode src="/button/qr.svg" />
      <Typography type="text" color="disabled">
        @nothing_but_ton_bot
      </Typography>
      <Typography type="title">Go to the mobile version!</Typography>
    </MobileOnlyQRStyled>
  );
};
