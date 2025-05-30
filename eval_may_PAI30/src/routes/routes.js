import { createBrowserRouter } from "react-router";
import App from "../App";
import { Search } from "../components/Search";
import CarbonPage from "../components/CarbonPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Search },
      { path: "intensity/:date", Component: CarbonPage },
    ],
  },
]);
