import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu from "./Components/Menu.jsx";
import Aboutus from "./Components/Aboutus.jsx";
import Error from "./Components/Error.jsx";

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/menu",
    element: <Menu />,
    errorElement: <Error />,
  },
  {
    path: "/aboutus",
    element: <Aboutus />,
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={approuter} />
  </React.StrictMode>
);
