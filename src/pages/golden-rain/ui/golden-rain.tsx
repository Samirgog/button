import React from "react";

import moment from "moment";

import { Header } from "@/features/header";
import { Stack } from "@/shared/ui";

export const GoldenRain: React.FC = () => {
  const now = moment();
  const utc = moment().utc();

  return (
    <Stack direction="column" gap={20}>
      <Header title="Golden Rain" withBack />

      <div style={{ color: "white" }}>
        {`Now: ${now}`}
        <br />
        {`UTC: ${utc}`}
      </div>
    </Stack>
  );
};
