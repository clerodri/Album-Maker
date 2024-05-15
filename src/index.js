import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserData from "./components/UserData";
import ResumenUser from "./components/ResumenUser";
import Message from "./components/Message";
import { UserDataProvider } from "./contexts/UserDataContext";
import { AlbumProvider } from "./contexts/AlbumContext";
import ThemeContextProvider from "./contexts/theme-context";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/album/userdata",
    element: <UserData />,
  },
  { path: "/album/resumen", element: <ResumenUser /> },
  { path: "/album/message", element: <Message /> },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <UserDataProvider>
        <AlbumProvider>
          <RouterProvider router={router} />
        </AlbumProvider>
      </UserDataProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
