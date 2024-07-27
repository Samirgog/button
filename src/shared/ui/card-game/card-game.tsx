import React from "react";

import { useNavigate } from "react-router-dom";

import { Typography } from "@/shared/ui";
import { CardGameStyled, IndicatorBadge } from "@/shared/ui/card-game/styled";

type Props = {
  bgImage: string;
  title: string;
  time?: string;
  disabled?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const CardGame: React.FC<Props> = ({
  bgImage,
  title,
  time,
  disabled,
  ...htmlAttributes
}) => {
  return (
    <CardGameStyled $bgImage={bgImage} {...htmlAttributes}>
      <Typography type="text" style={{ position: "relative", zIndex: 10 }}>
        {title}
      </Typography>

      {time ? (
        <Typography type="mini" style={{ position: "relative", zIndex: 10 }}>
          {time}
        </Typography>
      ) : (
        <IndicatorBadge />
      )}
    </CardGameStyled>
  );
};
