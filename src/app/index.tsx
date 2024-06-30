import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";
// import { App } from "./ui";
import { Friends } from "@/pages/friends";
import { Portfolio } from "@/pages/portfolio";
import { Tasks } from "@/pages/tasks";
import { TasksFull } from "@/pages/tasks-full";
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Portfolio />}>
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/tasks-full" element={<TasksFull />} />
      </Route>
    )
  );
  
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );