import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserData from "./components/UserData";
import ResumenUser from "./components/ResumenUser";
import Message from "./components/Message";
import { UserDataProvider } from "./UserDataContext";
import { AlbumProvider } from "./AlbumContext";
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
    <UserDataProvider>
      <AlbumProvider>
        <RouterProvider router={router} />
      </AlbumProvider>
    </UserDataProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
