import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Contact from "../component/Contact/Contact";
import Home from "../component/Home/Home";
import AboutMe from "../component/AboutMe/AboutMe";
import Skills from "../component/Skills/Skills";
// Add your Work component

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "Skills",
        element: <Skills/>,
      },
      {
        path: "work",
        element: <h1>work</h1>,
      },
      {
        path: "home",
        element: <Home />,
      },  {
        path: "About me",
        element: <AboutMe />,
      },
    ],
  },
]);

const Routes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
