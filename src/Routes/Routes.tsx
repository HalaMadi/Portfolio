import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Contact from "../component/Contact/Contact";
import Home from "../component/Home/Home";
       // Add your Work component

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "service",
        element: <h1>service</h1>,
      },
      {
        path: "work",
        element: <h1>work</h1>,
      },
      {
        path: "home",
        element: <Home/>,
      },
    ],
  },
]);

const Routes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
