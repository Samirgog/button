import { Friends } from "@/pages/friends";
import { Portfolio } from "@/pages/portfolio";
import { Tasks } from "@/pages/tasks";
import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Portfolio />}>
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/tasks" element={<Tasks />} />
      </Route>
    )
  );
  
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );