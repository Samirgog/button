import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";
import { App } from "./ui";
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <App /> 
    )
  );
  
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );