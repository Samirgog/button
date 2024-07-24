import React from "react";

import { CardGame } from "@/shared/ui/card-game";

type Props = React.HTMLAttributes<HTMLDivElement>;

export const GoldenRainCard: React.FC<Props> = ({ ...htmlAttributes }) => {
  return (
    <CardGame
      url="/button/golden-rain"
      bgImage="/button/games/golden-rain.webp"
      title="Golden Rain"
      time="22:31:57"
      {...htmlAttributes}
    />
  );
};
