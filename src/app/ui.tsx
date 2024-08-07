import React, { useEffect } from "react";

// import { TonConnectUIProvider } from "@tonconnect/ui-react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { userModel } from "@/entities/user";
import { MobileOnlyQR } from "@/features/mobile-only-qr";
import { Friends } from "@/pages/friends";
import { GoldenRain } from "@/pages/golden-rain";
import { Portfolio } from "@/pages/portfolio";
import { Splash } from "@/pages/splash";
import { Tasks } from "@/pages/tasks";
import "react-toastify/dist/ReactToastify.css";

// const manifestUrl = "https://samirgog.github.io/button/tonconnect-manifest.json";

const routerDefault = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/button/">
      <Route index element={<Portfolio />} />
      <Route path="/button/portfolio" element={<Portfolio />} />
      <Route path="/button/friends" element={<Friends />} />
      <Route path="/button/tasks" element={<Tasks />} />
      <Route path="/button/golden-rain" element={<GoldenRain />} />
    </Route>
  )
);

export const App: React.FC = () => {
  const platform = window.Telegram?.WebApp?.platform;
  const isMobile = platform === "android" || platform === "ios";

  const { isLoading: isLoadingAuth, isAuthenticated } = userModel.useAuth();
  const showSplash = isLoadingAuth || !isAuthenticated;

  useEffect(() => {
    window.Telegram?.WebApp?.expand?.();
    window.Telegram?.WebApp?.ready?.();
  }, []);

  if (!isMobile) {
    return <MobileOnlyQR />;
  }

  return (
    // <TonConnectUIProvider manifestUrl={manifestUrl}>
    <>
      {showSplash ? <Splash /> : <RouterProvider router={routerDefault} />}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        theme="dark"
        style={{
          height: "80px",
          borderRadius: "24px"
        }}
      />
    </>
    // </TonConnectUIProvider>
  );
};
