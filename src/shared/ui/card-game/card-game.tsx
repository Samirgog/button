import React from "react";

import { useNavigate } from "react-router-dom";

import { Typography } from "@/shared/ui";
import { CardGameStyled, IndicatorBadge } from "@/shared/ui/card-game/styled";

type Props = {
  url: string;
  bgImage: string;
  title: string;
  time?: string;
  disabled?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const CardGame: React.FC<Props> = ({
  url,
  bgImage,
  title,
  time,
  disabled,
  ...htmlAttributes
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(url);
  };

  return (
    <CardGameStyled $bgImage={bgImage} onClick={handleClick} {...htmlAttributes}>
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
