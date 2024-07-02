import React from "react";

import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import { Layout } from "@/app/layouts/layout";
import { Friends } from "@/pages/friends";
import { Portfolio } from "@/pages/portfolio";
import { Tasks } from "@/pages/tasks";
import { Navbar } from "@/widgets/navbar";

const manifestUrl = "https://Samirgog.github.io/button/tonconnect-manifest.json";

export const App: React.FC = () => {
  return (
    <React.StrictMode>
      <TonConnectUIProvider manifestUrl={manifestUrl}>
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <Layout>
                  <Outlet />
                  <Navbar />
                </Layout>
              }
            >
              <Route path="/" element={<Portfolio />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/friends" element={<Friends />} />
              <Route path="/tasks" element={<Tasks />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TonConnectUIProvider>
    </React.StrictMode>
  );
};
