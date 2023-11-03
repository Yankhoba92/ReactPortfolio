import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Project from "./Project.jsx";
import Resume from "./Resume.jsx";
import Contact from "./Contact.jsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <App/>,
  },
  {
    path: "/projects",
    element: <Project/>,
  },
  {
    path: "/resume",
    element: <Resume/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },

]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
