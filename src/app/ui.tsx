import React from "react";
import { Friends } from "@/pages/friends";
import { Portfolio } from "@/pages/portfolio";
import { Tasks } from "@/pages/tasks";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import {Layout} from "@/app/layouts/layout";
import {Navbar} from "@/widgets/navbar/ui";
import {TonConnectUIProvider} from "@tonconnect/ui-react";

const manifestUrl =
  "https://alefmanvladimir.github.io/my-twa/tonconnect-manifest.json";

export const App: React.FC = () => {
    return (
      <React.StrictMode>
        <TonConnectUIProvider manifestUrl={manifestUrl}>
          <BrowserRouter>
            <Routes>
              <Route element={
                <Layout>
                  <Outlet />
                  <Navbar />
                </Layout>
              }>
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
}
