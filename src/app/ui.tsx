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
import { validateInitData } from "@/shared/lib/validate-init-data";
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
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    console.log("window.Telegram.WebApp", window?.Telegram?.WebApp);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    console.log("window.Telegram.WebApp.initData", window?.Telegram?.WebApp?.initData);
    validateInitData(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      window?.Telegram?.WebApp?.initData,
      // eslint-disable-next-line no-secrets/no-secrets
      "7384853882:AAHbmhykajKEjK2hV_0dwG3mB5_xF-dybVo"
    );
  }, []);

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
