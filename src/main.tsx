import React from "react";

import ReactDOM from "react-dom/client";

import { App } from "./app";
import { getQueryClient } from "@/shared/providers/QueryClient";
import { QueryClientProvider } from "@tanstack/react-query";

const queryClient = getQueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
