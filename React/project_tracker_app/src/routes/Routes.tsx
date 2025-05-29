import { createBrowserRouter } from "react-router";
import App from "../App";
import Login from "../Pages/Login";
export const routes= createBrowserRouter(
    [{
      path: "/",
    Component: App,
    children: [
      { index: true, Component:Login  },
      { path: "about", Component: Dashboard},
    ]
}])