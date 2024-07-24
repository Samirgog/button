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
import { userModel } from "@/entities/user";
import { MobileOnlyQR } from "@/features/mobile-only-qr";
import { CreateTasks } from "@/pages/create-tasks";
import { Friends } from "@/pages/friends";
import { MyTasks } from "@/pages/my-tasks";
import { Portfolio } from "@/pages/portfolio";
import { Splash } from "@/pages/splash";
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
  const platform = window.Telegram?.WebApp?.platform;
  const isMobile = platform === "android" || platform === "ios";

  const { isLoading: isLoadingAuth, isAuthenticated } = userModel.useAuth();
  const showSplash = isLoadingAuth || !isAuthenticated;

  if (!isMobile) {
    return <MobileOnlyQR />;
  }

  return (
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      <div style={{ display: "flex", flexDirection: "column", color: "#fff" }}>
        <span>isMobile: {isMobile ? "true" : "false"}</span>
        <span>platform: {platform}</span>
      </div>
      {showSplash ? <Splash /> : <RouterProvider router={routerDefault} />}
    </TonConnectUIProvider>
  );
};
