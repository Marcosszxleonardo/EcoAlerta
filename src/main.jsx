import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import ErrorPage from "./ErroPage.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <home />,
      },

      {
        path: "/cadastrar",
        element: <Cadastrar />,
      },

      {
        path: "/login",
        element: <login />,
      },

      {
        path: "/feed",
        element: <feed />,
      },
      {
        path: "/Anonimo",
        element: <Anonimo />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);