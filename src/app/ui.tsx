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
import { userModel } from "@/entities/user";
// import { MobileOnlyQR } from "@/features/mobile-only-qr";
import { CreateTasks } from "@/pages/create-tasks";
import { Friends } from "@/pages/friends";
import { MyTasks } from "@/pages/my-tasks";
import { Portfolio } from "@/pages/portfolio";
// import { Splash } from "@/pages/splash";
import { Tasks } from "@/pages/tasks";
import { Navbar } from "@/widgets/navbar";

const manifestUrl = "https://samirgog.github.io/button/tonconnect-manifest.json";

const routerDefault = createBrowserRouter(
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

const routerCreator = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/button/"
      element={
        <Layout>
          <Outlet />
          <Navbar mode="creator" />
        </Layout>
      }
    >
      <Route index element={<CreateTasks />} />
      <Route path="/button/create" element={<CreateTasks />} />
      <Route path="/button/my-tasks" element={<MyTasks />} />
    </Route>
  )
);

const typeAccount = "default";
export const App: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.Telegram?.WebApp?.platform === "mobile");
  const { isLoading: isLoadingAuth, isAuthenticated } = userModel.useAuth();
  const showSplash = isLoadingAuth || !isAuthenticated;

  useEffect(() => {
    setIsMobile(window.Telegram?.WebApp?.platform === "mobile");
  }, [window.Telegram?.WebApp?.platform]);

  // if (!isMobile) {
  //   return <MobileOnlyQR />;
  // }

  return (
    <React.StrictMode>
      <TonConnectUIProvider manifestUrl={manifestUrl}>
        <div style={{ display: "flex", flexDirection: "column", color: "#fff" }}>
          <span>isMobile: {isMobile ? "true" : "false"}</span>
          <span>platform: {window.Telegram?.WebApp?.platform}</span>
        </div>
        {/*{showSplash ? <Splash /> : <RouterProvider router={routerDefault} />}*/}
        <RouterProvider router={routerDefault} />
      </TonConnectUIProvider>
    </React.StrictMode>
  );
};
