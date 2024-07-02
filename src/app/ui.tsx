import React from "react";

import { TonConnectUIProvider } from "@tonconnect/ui-react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider
} from "react-router-dom";

import { Layout } from "@/app/layouts/layout";
import { Friends } from "@/pages/friends";
import { Portfolio } from "@/pages/portfolio";
import { Tasks } from "@/pages/tasks";
import { Navbar } from "@/widgets/navbar";

const manifestUrl = "https://samirgog.github.io/button/tonconnect-manifest.json";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/button/"
      element={
        <Layout>
          <Outlet />
          <Navbar />
        </Layout>
      }
    >
      <Route index element={<Portfolio />} />
      <Route path="/button/portfolio" element={<Portfolio />} />
      <Route path="/button/friends" element={<Friends />} />
      <Route path="/button/tasks" element={<Tasks />} />
    </Route>
  )
);

export const App: React.FC = () => {
  return (
    <React.StrictMode>
      <TonConnectUIProvider manifestUrl={manifestUrl}>
        <RouterProvider router={router} />
      </TonConnectUIProvider>
    </React.StrictMode>
  );
};
