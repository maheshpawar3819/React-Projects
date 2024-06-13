import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Restaurents from "./Components/Restaurents.jsx";
import Aboutus from "./Components/Aboutus.jsx";
import Error from "./Components/Error.jsx";
import Body from "./Components/Body.jsx";

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
        errorElement: <Error />,
      },
      {
        path: "/aboutus",
        element: <Aboutus />,
        errorElement: <Error />,
      },
      {
        path: "/restaurents",
        element: <Restaurents />,
        errorElement: <Error />,
      },
    ],
  },
  {
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={approuter} />
  </React.StrictMode>
);
