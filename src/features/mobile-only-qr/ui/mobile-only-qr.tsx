import React from "react";
import QRCode from "qrcode.react";
import { MobileOnlyQRStyled } from "./styled";
import { Typography } from "@/shared/ui";

export const MobileOnlyQR: React.FC = () => {
  return (
    <MobileOnlyQRStyled>
      <Typography type="title">Go to mobile version!</Typography>
      <QRCode value={window.location.href} size={250} style={{ borderRadius: "14px" }} />
    </MobileOnlyQRStyled>
  );
};
