import React, { useEffect, useState } from "react";

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
import { Splash } from "@/pages/splash";
import { Tasks } from "@/pages/tasks";
import { Navbar } from "@/widgets/navbar";

const manifestUrl = "https://samirgog.github.io/button/tonconnect-manifest.json";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <Layout>
          <Outlet />
          <Navbar />
        </Layout>
      }
    >
      <Route index element={<Portfolio />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/friends" element={<Friends />} />
      <Route path="/tasks" element={<Tasks />} />
    </Route>
  )
);

export const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSplash(false);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <React.StrictMode>
      <TonConnectUIProvider manifestUrl={manifestUrl}>
        {showSplash ? <Splash /> : <RouterProvider router={router} />}
      </TonConnectUIProvider>
    </React.StrictMode>
  );
};
