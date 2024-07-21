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
import { CreateTasks } from "@/pages/create-tasks";
import { Friends } from "@/pages/friends";
import { MyTasks } from "@/pages/my-tasks";
import { Portfolio } from "@/pages/portfolio";
import { Splash } from "@/pages/splash";
import { Tasks } from "@/pages/tasks";
import { Navbar } from "@/widgets/navbar";
import { getQueryClient } from "@/shared/providers/QueryClient";
import { QueryClientProvider } from "@tanstack/react-query";

const manifestUrl = "https://samirgog.github.io/button/tonconnect-manifest.json";

const queryClient = getQueryClient();

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

const typeAccount = "creator";
export const App: React.FC = () => {
  const { isLoading: isLoadingAuth, isAuthenticated } = userModel.useAuth();

  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <TonConnectUIProvider manifestUrl={manifestUrl}>
          {isLoadingAuth && !isAuthenticated ? (
            <Splash />
          ) : (
            <RouterProvider router={typeAccount === "creator" ? routerCreator : routerDefault} />
          )}
        </TonConnectUIProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};
