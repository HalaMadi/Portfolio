import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Contact from "../component/Contact/Contact";
// import Service from "../component/Service/Service";  // Add your Service component
// import Work from "../component/Work/Work";          // Add your Work component
// import Home from "../component/Home/Home";          // Add your Home component

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
        element: <h1>home</h1>,
      },
    ],
  },
]);

const Routes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
