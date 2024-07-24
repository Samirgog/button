import React from "react";

import { QueryClientProvider } from "@tanstack/react-query";
import ReactDOM from "react-dom/client";

import { App } from "./app";

import { getQueryClient } from "@/shared/providers/QueryClient";

const queryClient = getQueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
